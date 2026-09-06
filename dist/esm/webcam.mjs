export const name="webcam";
export const id="dl_6d12e0a479464e3f9222";
export const url=new URL("../icons/webcam.svg?v=9e88fe9d68f4ee0b460502a6f2bd4dc38b62fd4c703dae5569234a3b0f8ccad5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
