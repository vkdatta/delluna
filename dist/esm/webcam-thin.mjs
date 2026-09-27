export const name="webcam-thin";
export const id="dl_df4623556b0e1d90d770";
export const url=new URL("../icons/webcam-thin.svg?v=c31a07bf4235b01bd2625b6d2e6c85588983f9f80b0ff2fdf89faebb52d79b92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
