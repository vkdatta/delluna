export const name="rocket-launch-thin";
export const id="dl_8f2432546f11443fbdeb";
export const url=new URL("../icons/rocket-launch-thin.svg?v=03e1bbaa81a2ff08e582936c32184e68714758b6e5cc472b1431d4a1a0db49c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
