export const name="videocam_off";
export const id="dl_4d390ef452f13733fcbc";
export const url=new URL("../icons/videocam_off.svg?v=633dc15f914fd36f0767431bbaf981d07d9d999efcfad475d5e0dbde0e59591a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
