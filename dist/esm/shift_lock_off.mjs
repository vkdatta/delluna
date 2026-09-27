export const name="shift_lock_off";
export const id="dl_54dab86e19387084d479";
export const url=new URL("../icons/shift_lock_off.svg?v=241e81d0c9859a1fc4f67415c3eecbbb0f1ac66f74a2e1eaf816aa9b373f742f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
