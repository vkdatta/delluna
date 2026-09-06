export const name="dresser";
export const id="dl_428e5f81e10c47b1aca4";
export const url=new URL("../icons/dresser.svg?v=57b9efeb9c2bced3cd36cd3333fe2d8e5dbe8ef9711dd0b07546699508ab8107",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
