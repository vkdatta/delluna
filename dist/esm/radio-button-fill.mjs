export const name="radio-button-fill";
export const id="dl_c0498b29fbc648b7a80a";
export const url=new URL("../icons/radio-button-fill.svg?v=aee067d114c0b31d4e0779d0ecb7bfeee9df987fcd3501310288d35c98d2bedb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
