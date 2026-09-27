export const name="arrows-in-duotone";
export const id="dl_ff3c1940017c4e289267";
export const url=new URL("../icons/arrows-in-duotone.svg?v=da1f9de88db94dd32b72bc776731f6ab2e21d3f6393860c92ab6393b1460d343",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
