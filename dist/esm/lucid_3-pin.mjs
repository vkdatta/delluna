export const name="lucid_3-pin";
export const id="dl_6ede4a5f89724d77b1dc";
export const url=new URL("../icons/lucid_3-pin.svg?v=ff35850d4c53fd831131becc0b6f5eebf9e05c6e554dcea5348fa61d499eaae2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
