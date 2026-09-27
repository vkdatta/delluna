export const name="subtitles_off";
export const id="dl_d91ebf26dd0ddd60b058";
export const url=new URL("../icons/subtitles_off.svg?v=be7e4451db132736bb2edf632ccfafc535f46abedc65365cda163b25f46e549e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
