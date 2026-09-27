export const name="graph_2";
export const id="dl_2860ab36c38f7c9d776e";
export const url=new URL("../icons/graph_2.svg?v=edad888c8ca9fc0172f227ae199f51c1ea63f9f195905a6f060dbbf8308873c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
