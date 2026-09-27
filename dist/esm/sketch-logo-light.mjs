export const name="sketch-logo-light";
export const id="dl_ed63dd0a68b42934a62a";
export const url=new URL("../icons/sketch-logo-light.svg?v=4e57da88f4dc0b84651bdfc1ec77145abf5d4ea5e853565fe5e65148eaf1032e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
