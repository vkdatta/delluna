export const name="lucid_2-folder-cog";
export const id="dl_648a908b01724c33b97b";
export const url=new URL("../icons/lucid_2-folder-cog.svg?v=22cc91509f014f9546a7f1c19c567225a33d694b62965320452176f70d9b7840",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
