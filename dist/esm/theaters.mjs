export const name="theaters";
export const id="dl_bf4ea01dbd1f255edf33";
export const url=new URL("../icons/theaters.svg?v=31dd12fc3d6488822a15fd0c36389768c8198964212766749cb9bd186554a5d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
