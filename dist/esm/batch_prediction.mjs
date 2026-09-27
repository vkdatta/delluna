export const name="batch_prediction";
export const id="dl_c04c405b4f888db1d41d";
export const url=new URL("../icons/batch_prediction.svg?v=5969dd225389ad381b34b36804ee4a355ce0c87140e6d9a18296f98dca4b8f86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
