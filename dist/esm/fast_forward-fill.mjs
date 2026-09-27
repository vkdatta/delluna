export const name="fast_forward-fill";
export const id="dl_8c31da7ad43a27cc900f";
export const url=new URL("../icons/fast_forward-fill.svg?v=ffb0e23d6d223ec2c6e538d153c870a14d8368a0e508db4bdb73f45c6ac46a2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
