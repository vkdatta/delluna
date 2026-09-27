export const name="finn-the-human-light";
export const id="dl_0b8a01942fa04aea8971";
export const url=new URL("../icons/finn-the-human-light.svg?v=4d8c9d47d1d13c08089cf5875f87e139695a0758573247b60d0479237af271ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
