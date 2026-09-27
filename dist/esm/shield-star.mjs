export const name="shield-star";
export const id="dl_fae55f36befc44dcf9ff";
export const url=new URL("../icons/shield-star.svg?v=1e88e518d11c521395fc4b957cd4690eaef1629d623ef0b28e78c603a6658b0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
