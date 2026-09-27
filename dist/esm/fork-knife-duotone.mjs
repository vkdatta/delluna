export const name="fork-knife-duotone";
export const id="dl_054cc47c8a25439395df";
export const url=new URL("../icons/fork-knife-duotone.svg?v=f3661343d6a59f165274900a33e9180f098c6216ab0b4726f9c06ab98da71750",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
