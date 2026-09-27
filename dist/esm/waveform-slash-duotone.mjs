export const name="waveform-slash-duotone";
export const id="dl_bfbdbb0c95f2671c8ba9";
export const url=new URL("../icons/waveform-slash-duotone.svg?v=823df501b7566a94fe2f5508c900f8b92d536d02fb8a72cb350805e4a89d8dae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
