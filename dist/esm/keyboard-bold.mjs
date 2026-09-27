export const name="keyboard-bold";
export const id="dl_cc9a3271779946eaa18c";
export const url=new URL("../icons/keyboard-bold.svg?v=09697415f7c0fe01e3910812fae97f24d50c6b012cd60f8990d7b2d3d4803ed6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
