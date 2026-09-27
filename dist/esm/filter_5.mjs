export const name="filter_5";
export const id="dl_62f6ade59478139b7706";
export const url=new URL("../icons/filter_5.svg?v=a3f4eece55a166da19d825eaf1781a92aae1196320f3ea166d42586e2585960a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
