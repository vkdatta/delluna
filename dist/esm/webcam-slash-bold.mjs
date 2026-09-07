export const name="webcam-slash-bold";
export const id="dl_b167f6ccee144a29bf9f";
export const url=new URL("../icons/W/webcam-slash-bold.svg?v=9f5de21c2356d935b2ceac6408293f344511b1c333f00a338ca14cf3d9d71d73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
