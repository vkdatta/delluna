export const name="tornado-bold";
export const id="dl_19a80708d6b29011bcd4";
export const url=new URL("../icons/tornado-bold.svg?v=8e1ef9409c974920324b75ca276b67d23f67f65504629916fb5c51a865673bf7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
