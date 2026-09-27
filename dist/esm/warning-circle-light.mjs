export const name="warning-circle-light";
export const id="dl_64058042e5bac5ee7cfa";
export const url=new URL("../icons/warning-circle-light.svg?v=0fc259d6464a531926af0f4799c72d75be1b6eb9af53e7b998a89f4e769f4dc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
