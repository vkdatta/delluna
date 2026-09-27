export const name="bedroom_baby-fill";
export const id="dl_bafb113fbacb0738eee3";
export const url=new URL("../icons/bedroom_baby-fill.svg?v=a2c29b3e302f89ecce12ee16c566d932cd3eed253cc6ad9c68058468096abb48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
