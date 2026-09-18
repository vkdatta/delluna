export const name="soundbar-fill";
export const id="dl_fd8bc4743b664a328fe2";
export const url=new URL("../icons/soundbar-fill.svg?v=fb675ccc25a8c39808e90180d73c80d2491f27141f5177cd3649ec341dfac380",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
