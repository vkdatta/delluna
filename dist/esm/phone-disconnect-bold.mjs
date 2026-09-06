export const name="phone-disconnect-bold";
export const id="dl_d664306f79524a698f2b";
export const url=new URL("../icons/phone-disconnect-bold.svg?v=10da7dcb93fd8e6bec871440779792f13fe32aaba05878c5a517d344c36725b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
