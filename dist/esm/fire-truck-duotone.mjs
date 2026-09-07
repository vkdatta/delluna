export const name="fire-truck-duotone";
export const id="dl_cb490ee8933641c5850f";
export const url=new URL("../icons/fire-truck-duotone.svg?v=2d41e97ab111547b9711d5d8a63f8b2c71b34bcd345532a0428df1951312a35f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
