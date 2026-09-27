export const name="check-duotone";
export const id="dl_c1b4a6302a55491c9327";
export const url=new URL("../icons/check-duotone.svg?v=d06dd32039a4d685fd3086567ccd6c8d0329bb0782c3fb051fc5d9513d11a39a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
