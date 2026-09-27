export const name="rate_review";
export const id="dl_aaaa876ab6471cdc75cc";
export const url=new URL("../icons/rate_review.svg?v=8308da08cc9830e720ddd81d34652e3823fcf46dc95063bb1bb0b3cb715a155d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
