export const name="accessible_menu-fill";
export const id="dl_0f588fdfa2ac11d92ab6";
export const url=new URL("../icons/accessible_menu-fill.svg?v=cb55ec9c20d6494c99d9bc40c0fdca07d0732e0378d2436f988d95e941a2aba1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
