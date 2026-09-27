export const name="volume_down";
export const id="dl_8f032102ad2c215f31eb";
export const url=new URL("../icons/volume_down.svg?v=b87bf6dad2f5bd423fb33708094a091fc590a7141bec12e0b46b0bfc7f0c35ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
