export const name="rocket-light";
export const id="dl_c860263b968343b18cfc";
export const url=new URL("../icons/rocket-light.svg?v=e921043330c5f84eeedf96989aaf4a3a830b502f5f24ccf6c4d4b71b4505506d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
