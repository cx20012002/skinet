using System;
using System.Linq.Expressions;
using Core.Entities.OrderAggregate;

namespace Core.Specifications
{
    public class OrderByPaymentIntentIdWithSpecification : BasicSpecification<Order>
    {
        public OrderByPaymentIntentIdWithSpecification(string paymentIntentId) : base(o=>o.PaymentIntentId == paymentIntentId)
        {
        }
    }
}