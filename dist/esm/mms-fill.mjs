export const name="mms-fill";
export const id="dl_448fdd5843b2455bd8d0";
export const url=new URL("../icons/mms-fill.svg?v=77fa0e6c8796cddea34e13c7dcd6d03abcba99b448d1ea857a02de3b1717b4cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
