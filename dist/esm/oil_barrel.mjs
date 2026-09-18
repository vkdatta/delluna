export const name="oil_barrel";
export const id="dl_cb5b5fba84bf4c1fbee5";
export const url=new URL("../icons/oil_barrel.svg?v=d4a4ea92337f11315d8b9672869e0dccbfc312ef81fbc43c2f12506a6ce4d73f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
