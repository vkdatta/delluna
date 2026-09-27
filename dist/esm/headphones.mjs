export const name="headphones";
export const id="dl_0db5ffdf11e840efa470";
export const url=new URL("../icons/headphones.svg?v=9b80e0e80753ee93c1a68194e1d732329fbb4f51722a354a9b3ac5fa0096ca3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
