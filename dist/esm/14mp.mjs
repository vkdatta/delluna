export const name="14mp";
export const id="dl_f265fe513ce442a2813d";
export const url=new URL("../icons/1/14mp.svg?v=3b3988cb74140b7c9174d2560fd73359d62e7147afa5f9f2735bb5432082c5e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
