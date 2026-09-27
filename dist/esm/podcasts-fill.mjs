export const name="podcasts-fill";
export const id="dl_d39d6c73594e1c15fa25";
export const url=new URL("../icons/podcasts-fill.svg?v=6872eedb5661190f581db3eb77c315cc0fca5d286d4b986d36275720e1e4e35d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
