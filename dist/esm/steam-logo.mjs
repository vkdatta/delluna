export const name="steam-logo";
export const id="dl_55777785aa7a4fdcb218";
export const url=new URL("../icons/S/steam-logo.svg?v=91843e92904153eaea49147a49141ee43dbfb2d6d15a7dbfb6e085321c3a081c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
