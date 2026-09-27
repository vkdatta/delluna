export const name="suitcase-rolling-duotone";
export const id="dl_ce1707fd2a2a87378b37";
export const url=new URL("../icons/suitcase-rolling-duotone.svg?v=acf4e84b44045978e163bec24d1c970644dad5fb49e962b058d837826ef138bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
