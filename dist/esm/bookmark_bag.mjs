export const name="bookmark_bag";
export const id="dl_031642c4a7d26d1cc860";
export const url=new URL("../icons/bookmark_bag.svg?v=79936f1739098e6bc03b636837629c40a701bd68afcb40c773861d6397643628",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
