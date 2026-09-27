export const name="sell";
export const id="dl_0c4b2417fd5dfae50237";
export const url=new URL("../icons/sell.svg?v=d11db3e23d2e214248848708159a3218b4f8d85ff0e49cbf285a0667c2d55605",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
