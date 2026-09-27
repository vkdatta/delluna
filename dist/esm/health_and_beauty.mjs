export const name="health_and_beauty";
export const id="dl_b96d0b225cbf6ccde472";
export const url=new URL("../icons/health_and_beauty.svg?v=7eddda637d799e75bc7c22194f63a55c3a0f057adf1fced935cd1d2f7e4217b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
