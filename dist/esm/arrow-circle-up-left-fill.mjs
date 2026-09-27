export const name="arrow-circle-up-left-fill";
export const id="dl_d80d3141f87e4565be43";
export const url=new URL("../icons/arrow-circle-up-left-fill.svg?v=e234d5a24ed624bd83d846ee7b45b2186f4090f0911ed8dbed14ef2a7059b8ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
