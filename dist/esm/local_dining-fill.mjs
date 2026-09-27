export const name="local_dining-fill";
export const id="dl_b383fb8277495e4a8cea";
export const url=new URL("../icons/local_dining-fill.svg?v=546a88bdbab36a263f5965e0faa320217569a0c22819a48735051f9b401391d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
