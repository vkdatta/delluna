export const name="sailing";
export const id="dl_ff5ee42a64bd636a0db0";
export const url=new URL("../icons/sailing.svg?v=efe789a0b516d7de20456c3d323a6a0653909aaf274e4e350c12341b7764c7c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
