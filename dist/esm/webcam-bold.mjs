export const name="webcam-bold";
export const id="dl_b5e5d48243fa3fd3504e";
export const url=new URL("../icons/webcam-bold.svg?v=a96b839a0796dde8db71e2796be1080f58a389aaaee5a7a90a3c0dc6e5806409",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
