export const name="ventilator";
export const id="dl_7635eb751f758db52751";
export const url=new URL("../icons/ventilator.svg?v=22a1fa4addd1a6efde59a9e5f154ce749784f6fe805a86e2c8fa2affc48709db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
