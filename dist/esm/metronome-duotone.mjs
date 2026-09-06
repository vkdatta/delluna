export const name="metronome-duotone";
export const id="dl_52ed497e98f24387a30d";
export const url=new URL("../icons/metronome-duotone.svg?v=f93a912789548e087cc1cb1d6dfc6b47f41cd62e769c93c0174a94b11097bc4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
