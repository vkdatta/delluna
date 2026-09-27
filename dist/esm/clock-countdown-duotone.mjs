export const name="clock-countdown-duotone";
export const id="dl_89c7f9acaa7e4edead1e";
export const url=new URL("../icons/clock-countdown-duotone.svg?v=39c0a7129fcaa36f1f5a743c07c7cf1e22bb9df7565f3a27c2cd0ecc8c58e169",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
