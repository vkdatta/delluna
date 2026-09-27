export const name="folder_check_2-fill";
export const id="dl_b912506649d1854d2921";
export const url=new URL("../icons/folder_check_2-fill.svg?v=4e178360012cedd1229ff65d4c28679c42cbc98dd2bfdfd12589c37e7d6f1047",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
