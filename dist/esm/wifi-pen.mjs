export const name="wifi-pen";
export const id="dl_06f024b2770d4a2a9e47";
export const url=new URL("../icons/wifi-pen.svg?v=f285e940b1f3afc7bf11a7456169e0a74edaf43d8c3347c43ab93b350cf3d62d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
