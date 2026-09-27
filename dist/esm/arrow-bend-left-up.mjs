export const name="arrow-bend-left-up";
export const id="dl_1b0ba6788dba4887910f";
export const url=new URL("../icons/arrow-bend-left-up.svg?v=d71b45312e88a0810419340c673ec52967c5343fe46694895b1845937cfbfcf0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
