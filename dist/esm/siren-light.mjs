export const name="siren-light";
export const id="dl_b467242f6197649f9e51";
export const url=new URL("../icons/siren-light.svg?v=7da8e40acd5396b26ae45ec3d176885eaf05ce332ea738308c07b266776b9ecd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
