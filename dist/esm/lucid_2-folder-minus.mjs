export const name="lucid_2-folder-minus";
export const id="dl_7aea585323ad4368bd5b";
export const url=new URL("../icons/lucid_2-folder-minus.svg?v=9197f69711a81218c7b3256d76c3947accfcf415f4081b2988d170439d711b6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
