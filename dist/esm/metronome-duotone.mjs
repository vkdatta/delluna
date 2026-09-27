export const name="metronome-duotone";
export const id="dl_52ed497e98f24387a30d";
export const url=new URL("../icons/metronome-duotone.svg?v=da5c191c2ba13db290f0f150197dc9bdada79762ab80fb8d496a11c544410b12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
