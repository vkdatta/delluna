export const name="text-subscript-thin";
export const id="dl_079f9a48f266b5d91db6";
export const url=new URL("../icons/text-subscript-thin.svg?v=11746de7f167aeece78ac6e59c3a9f40a0e5ee3517cbef27b5adc19757434478",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
