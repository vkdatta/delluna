export const name="lucid_3-rotate-ccw-clock";
export const id="dl_c84fdcb5c2ef4728afc6";
export const url=new URL("../icons/lucid_3-rotate-ccw-clock.svg?v=dfbf35143f3cdbf5401231f7aabf434326845f0292cacd3edf54c7ca2b84f8e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
