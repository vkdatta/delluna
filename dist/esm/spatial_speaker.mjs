export const name="spatial_speaker";
export const id="dl_332458b9e948e42a261e";
export const url=new URL("../icons/spatial_speaker.svg?v=9f22ae1309826aa53bccf54fe6789ccce881af04ba43a2e6890e4c16b2929b7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
