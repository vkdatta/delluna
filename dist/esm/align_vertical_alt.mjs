export const name="align_vertical_alt";
export const id="dl_de4f75e4ce8040afb03b";
export const url=new URL("../icons/all_60_named_svgs/align_vertical_alt.svg?v=eec2d43c26f32a0eb4d20b1738bd0909c1bc561b7ec776205c36aa7dd941c133",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
