export const name="lucid_2-image-up";
export const id="dl_5d5beb6bbe4a42a2a294";
export const url=new URL("../icons/lucid_2-image-up.svg?v=4e951a0572929b4980e07431570c2b74e364bb87554e0a84f5912e6d2bf009d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
