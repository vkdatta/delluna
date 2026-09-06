export const name="instagram-logo-thin";
export const id="dl_37afefa72ec74e2b889b";
export const url=new URL("../icons/instagram-logo-thin.svg?v=2b7d0baab5453ea951b93584ac8b628aeae50456b3a1516ddc66591e7315cf7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
