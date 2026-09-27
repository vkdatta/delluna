export const name="new_window-fill";
export const id="dl_6b80cb63e0b8e413f5c0";
export const url=new URL("../icons/new_window-fill.svg?v=e6a0c4a89be801a8ac5f4302e512f1ff700689eeceec3d0d2bc16a2fc8e12a75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
