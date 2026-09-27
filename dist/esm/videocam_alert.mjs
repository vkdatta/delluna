export const name="videocam_alert";
export const id="dl_aef705b5cc039e26837b";
export const url=new URL("../icons/videocam_alert.svg?v=95c119f211f3e339d7271c49167612d2d4dd74c4dd7f0e2c7fc30f273c8267ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
