export const name="leaf-fill";
export const id="dl_96e59f2630ca4f8a975c";
export const url=new URL("../icons/leaf-fill.svg?v=82c2ea1143c558c79163e04aa1c3348a1ed05f362573bc609bd8bbca46e3aaeb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
