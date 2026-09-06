export const name="lucid_3-refresh-ccw-dot";
export const id="dl_2b1dfe63e14842f48530";
export const url=new URL("../icons/lucid_3-refresh-ccw-dot.svg?v=f75815e7cbec3e564a8c4d41edc362ab6295eb6ec03796850c351df5a6e97b3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
