export const name="square-plus";
export const id="dl_ff975f123c664860871d";
export const url=new URL("../icons/square-plus.svg?v=4c0db2f36b5332eb0755f5a5ea86ee116188638b334632abdc16f9c62ee4a72b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
