export const name="hard-drive-duotone";
export const id="dl_6c8a1c1013bd4949a0c3";
export const url=new URL("../icons/hard-drive-duotone.svg?v=81398ca14b02c680a92016afe83f21edf1fcfcd32f07523b76a4cd9f4186f2db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
