export const name="cheese-thin";
export const id="dl_125636cacf66482da056";
export const url=new URL("../icons/cheese-thin.svg?v=ef387af20e4500e3eaf197bac663248699ee3ce46eb83719195bbc2c3fd1997b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
