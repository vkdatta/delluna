export const name="lucid_2-file-badge";
export const id="dl_995c05dc21a94d5bb594";
export const url=new URL("../icons/lucid_2-file-badge.svg?v=d813091814265b8038da8d3f52bab23a72ef328305540af2645c5861e3dc168b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
