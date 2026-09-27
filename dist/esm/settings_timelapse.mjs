export const name="settings_timelapse";
export const id="dl_e0ae3abd95d36350375f";
export const url=new URL("../icons/settings_timelapse.svg?v=fd5b06d986f8f86bfbbd44e7cb5d1eddeb2fbff7d2ed63d793ebda0208474e21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
