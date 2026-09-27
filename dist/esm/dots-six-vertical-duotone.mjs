export const name="dots-six-vertical-duotone";
export const id="dl_450d0dbff1fc45e3b923";
export const url=new URL("../icons/dots-six-vertical-duotone.svg?v=d1dc7ae78775cfa04aa0a2db86911c62e038d2ecbd4e539220ead1f5055e3d8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
