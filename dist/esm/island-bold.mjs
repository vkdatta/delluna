export const name="island-bold";
export const id="dl_5540819d70f4488d98d5";
export const url=new URL("../icons/island-bold.svg?v=61dcf101ec399daa975264c0af67b8aec8c610a0431241ba49371ba581c018a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
