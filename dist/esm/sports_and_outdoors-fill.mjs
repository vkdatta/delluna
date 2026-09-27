export const name="sports_and_outdoors-fill";
export const id="dl_3932aa178a5f41200b46";
export const url=new URL("../icons/sports_and_outdoors-fill.svg?v=faea868da45a5a8f2226f6db412d31dd647915a9be79e4f770fe1cd2b040e56b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
