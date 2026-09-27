export const name="phone_enabled";
export const id="dl_c17865f90aea0ace4200";
export const url=new URL("../icons/phone_enabled.svg?v=6800ac9d8687cc97a81dc7e417add1b50fc764579223bf2bf032a6d9553d3ac7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
