export const name="hourglass_empty-fill";
export const id="dl_2cd87a6a18a54a6a95e6";
export const url=new URL("../icons/hourglass_empty-fill.svg?v=cdb55ba087415c67fa04723c8c95b58cc3da8d60978d26681d0c2421156ded22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
