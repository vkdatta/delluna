export const name="planet";
export const id="dl_3d43c71395f3c48c9a58";
export const url=new URL("../icons/planet.svg?v=4374fed9d2a9b4d13eefc25fd0436416fe8b973f5dfa25b946ebc0b4caeed9fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
