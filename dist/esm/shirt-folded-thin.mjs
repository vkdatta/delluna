export const name="shirt-folded-thin";
export const id="dl_9bc5e1f6c8b2477ea9e2";
export const url=new URL("../icons/S/shirt-folded-thin.svg?v=f9d42f6dbb7f737ce5aca33f4b5b160fe35736bc3c397ea5dea0ed0a7b12b506",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
