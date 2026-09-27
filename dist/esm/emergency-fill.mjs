export const name="emergency-fill";
export const id="dl_a1d10351fc129f5a205c";
export const url=new URL("../icons/emergency-fill.svg?v=e0eb6e1319d14acd13e775d11bde07cbc8ac6c7ccd94c8f7ef6039fd1b685a89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
