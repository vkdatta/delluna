export const name="bell-ringing-light";
export const id="dl_83c55328fa2248a7892d";
export const url=new URL("../icons/bell-ringing-light.svg?v=87e5c52054bc4f885c33c5d8270361b6a900f747f04b2720dbfbc460343630fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
