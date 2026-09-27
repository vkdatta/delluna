export const name="shield-slash";
export const id="dl_c86efc55ec4b63af0b0b";
export const url=new URL("../icons/shield-slash.svg?v=91d948421bdbd33e94eaf4880b05bf552d2ea44c9306b73afb2753ebc68d43ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
