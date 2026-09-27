export const name="dots-six-vertical-fill";
export const id="dl_5a11c4b929704f4885c9";
export const url=new URL("../icons/dots-six-vertical-fill.svg?v=6f38d5c14eba68290920224083007c0d10c9fc4f8792c6a48f4e6141c2cfff99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
