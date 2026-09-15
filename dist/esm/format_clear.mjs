export const name="format_clear";
export const id="dl_92b2edccd1dd4634a8d3";
export const url=new URL("../icons/F/format_clear.svg?v=3f20ecaeafe8d178b8f350f25cf523b43c1c322d6793eaea41ed1271944184ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
