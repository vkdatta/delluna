export const name="picture_in_picture_mobile";
export const id="dl_b360e77345842428f60a";
export const url=new URL("../icons/picture_in_picture_mobile.svg?v=103f66dd1b98939fc1056d9d5f83b06c2c0092d0aeca8cd87edbeca373d654ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
