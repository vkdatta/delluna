export const name="rice_bowl-fill";
export const id="dl_07cde067bf95b7fcda92";
export const url=new URL("../icons/rice_bowl-fill.svg?v=b3f19b53ff291ebb522cb69a31519d6e497914dcc35d9d9883db6c99decf20a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
