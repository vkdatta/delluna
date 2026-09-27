export const name="wheelchair-motion-light";
export const id="dl_9050f01113e4cf99f1f0";
export const url=new URL("../icons/wheelchair-motion-light.svg?v=c774eb35e06de8b97af8294c82b35791f31b863f3026c13765e7417b8b9c3b2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
