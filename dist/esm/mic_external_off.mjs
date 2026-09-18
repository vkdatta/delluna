export const name="mic_external_off";
export const id="dl_71062c9311a94801af25";
export const url=new URL("../icons/M/mic_external_off.svg?v=0f5b7a29add50afca92be82b51687a45368846299be007a990dd03133db423dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
