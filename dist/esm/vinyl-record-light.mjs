export const name="vinyl-record-light";
export const id="dl_21d07863bbb6c461cc53";
export const url=new URL("../icons/vinyl-record-light.svg?v=406a0a40a0447f370d21e32aec2cb83cb5d07764fac3a7f33a37ae30b8128d4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
