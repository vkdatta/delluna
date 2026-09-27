export const name="eraser_size_2-fill";
export const id="dl_e619a8d71c89a7718048";
export const url=new URL("../icons/eraser_size_2-fill.svg?v=f5f9304f8b395e71b4a0b15ff6fd903c48893e5fe093454ec90f0ead1452f11a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
