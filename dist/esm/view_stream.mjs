export const name="view_stream";
export const id="dl_9afc02fea3f1b48b9fb7";
export const url=new URL("../icons/view_stream.svg?v=3a49679ec1424268eaf8e52dc9d1cdce9404b18f6a14d90933dfc12b0d0f37eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
