export const name="binary-thin";
export const id="dl_b390cecf8c1b4e489012";
export const url=new URL("../icons/binary-thin.svg?v=6c6a505b1db2abe2afe4c2a692680111fc6dc6df2bc1fb18538711e136d894c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
