export const name="lips-fill";
export const id="dl_6874e43c0e54803c8b8d";
export const url=new URL("../icons/lips-fill.svg?v=05d91aad30576d6498bd45f988d01418d5a336b5e1c6ac824dc8a73a3650705a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
