export const name="device-mobile-thin";
export const id="dl_111f1ca75e1343e1a40d";
export const url=new URL("../icons/device-mobile-thin.svg?v=2a3e7e34fa01cf3969daf560d3aa07ae2b18b8b4b33cb09a32cc01c0f30ca17d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
