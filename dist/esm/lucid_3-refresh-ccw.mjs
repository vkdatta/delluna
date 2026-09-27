export const name="lucid_3-refresh-ccw";
export const id="dl_4cf5da966b94416daf9d";
export const url=new URL("../icons/lucid_3-refresh-ccw.svg?v=cc49f8cc288a11b37252561c7bc73d2359b88d6df848d9a5dc547f4c7869cd93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
