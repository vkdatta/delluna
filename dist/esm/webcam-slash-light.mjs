export const name="webcam-slash-light";
export const id="dl_e1d24fe3911b65c63f3d";
export const url=new URL("../icons/webcam-slash-light.svg?v=04d27e2277a051ee8004d1a2b9af19ad5b6601253a3f0eaac689ec2358791f56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
