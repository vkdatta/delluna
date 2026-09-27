export const name="chair_fireplace";
export const id="dl_8eda3da802684aa48904";
export const url=new URL("../icons/chair_fireplace.svg?v=e3e16e88e326b40efe44cd05f454493b79bbf49f186c57aa760db1da0f6f2ae5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
