export const name="plagiarism-fill";
export const id="dl_481a78d9266ab041267f";
export const url=new URL("../icons/plagiarism-fill.svg?v=7674069231ddd4c2d60328b5e191513d5314029a53a2ccf9e1552e8017f24c66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
