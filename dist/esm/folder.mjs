export const name="folder";
export const id="dl_18305818779e2027e38c";
export const url=new URL("../icons/folder.svg?v=03d84b7054445edf96340b9d1c0f79d7149ba961756a35a075bf7edbf107824c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
