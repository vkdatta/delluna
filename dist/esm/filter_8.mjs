export const name="filter_8";
export const id="dl_e6acef4707c9a340e4f7";
export const url=new URL("../icons/filter_8.svg?v=147db15b7f0a88badc69a4ad65e659efda9746a8d88e53bb4aa3ed9d15e3ba6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
