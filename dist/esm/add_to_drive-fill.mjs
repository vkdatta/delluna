export const name="add_to_drive-fill";
export const id="dl_1e8f6a0d4f7bfcbfd4b3";
export const url=new URL("../icons/add_to_drive-fill.svg?v=735e6f1ffe6513b9df3379b20f875a60d6348f14497641f6fd621447c4bdb513",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
