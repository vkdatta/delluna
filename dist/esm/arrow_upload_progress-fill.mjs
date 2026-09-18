export const name="arrow_upload_progress-fill";
export const id="dl_7d1b9d4a6a884dcfb440";
export const url=new URL("../icons/arrow_upload_progress-fill.svg?v=552ec661b8bf7508fdfd32a16443db724a2ff9bfccfc064180e346fc085b092f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
