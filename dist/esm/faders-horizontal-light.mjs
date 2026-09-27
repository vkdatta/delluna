export const name="faders-horizontal-light";
export const id="dl_c8492a4c1b634c2191d2";
export const url=new URL("../icons/faders-horizontal-light.svg?v=389fd5cb837f8ac947baced9e5bd80fb88e87e69695ed45c724935b34ff76d92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
