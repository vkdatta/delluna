export const name="humerus-fill";
export const id="dl_4e8e3668641e425a07e2";
export const url=new URL("../icons/humerus-fill.svg?v=4e8f3d0f6ae941af449314808777146d0c1d84015869d5cb1b7ad56b7e018235",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
