export const name="file-jsx-fill";
export const id="dl_e8c3eb15a2a148599e34";
export const url=new URL("../icons/file-jsx-fill.svg?v=99abf87bc2b0740e75445d859621ada9447534bae62716023d4c9c7af9916b77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
