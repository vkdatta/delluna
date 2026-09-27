export const name="arrow-bend-right-up-bold";
export const id="dl_89b89b190c374296aa2f";
export const url=new URL("../icons/arrow-bend-right-up-bold.svg?v=f04dcf7d4eec445ccbfc129bc794bad8d4abd3b985e9302b5f30d8a0e1a6b807",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
