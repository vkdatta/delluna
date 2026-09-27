export const name="position_top_right-fill";
export const id="dl_fc3d4ada8188dd76efbb";
export const url=new URL("../icons/position_top_right-fill.svg?v=d17b842a4f46090457b86b66037c5c85f0ac0eb9c468a88c407ac326ff233eb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
