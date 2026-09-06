export const name="fan-bold";
export const id="dl_ba43e8609093467ebf1e";
export const url=new URL("../icons/fan-bold.svg?v=bdd29b1cd3aca433f25a90df54d69a035db15c6f895fbabc42ee01512ab0c06d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
