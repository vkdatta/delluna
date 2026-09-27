export const name="pulse-duotone";
export const id="dl_42ce226f415f434ab82c";
export const url=new URL("../icons/pulse-duotone.svg?v=fc8f98ce03f12148db8ebdc79fe85d8b7761550d1868573159840ed16a9e9774",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
