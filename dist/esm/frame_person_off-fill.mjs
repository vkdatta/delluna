export const name="frame_person_off-fill";
export const id="dl_3b0b938d9d4c84b24099";
export const url=new URL("../icons/frame_person_off-fill.svg?v=2a1923feb9879d7a0ebc8a76f42b37880715f003ad0a9da136c1c332ba656343",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
