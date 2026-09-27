export const name="backspace-light";
export const id="dl_3d117841a9544015984d";
export const url=new URL("../icons/backspace-light.svg?v=9487f607895b33cd8eaff89467fb1539a12ac272188e73ee94b1b1111eab3639",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
