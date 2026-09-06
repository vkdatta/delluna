export const name="corners-in";
export const id="dl_f5bf83c771bc4dec9604";
export const url=new URL("../icons/corners-in.svg?v=31e9060aafdd6e24f4b8aef7742a89e7e616e6e2da07160691d020cb5ab07dee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
