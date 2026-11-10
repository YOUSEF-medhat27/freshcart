import { Suspense } from "react";
import { getAllOrdersAction } from "@/PaymentAction/Order";
import OrdersList from "../_Components/OrdersData/OrdersList";
import { Spinner } from "@/components/ui/spinner";

async function OrdersData() {
  const data = await getAllOrdersAction();

  return <OrdersList orders={data} />;
}

export default function AllOrders() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <Spinner className="size-8  text-primary-600" />
        </div>
      }
    >
      <OrdersData />
    </Suspense>
  );
}
