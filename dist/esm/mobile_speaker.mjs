export const name="mobile_speaker";
export const id="dl_de93edcda463e2249e73";
export const url=new URL("../icons/mobile_speaker.svg?v=d865079ef7575464f3f7aac3c18a019e073124e62e7303b5362ee12f1c75fbfc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
