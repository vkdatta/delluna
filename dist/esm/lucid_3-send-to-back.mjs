export const name="lucid_3-send-to-back";
export const id="dl_aadaca469c3548adb967";
export const url=new URL("../icons/lucid_3-send-to-back.svg?v=b2fcb176a76c88a8560d3969f7955434fa9e88d03abb9d947fcb1d5e54fe8fe8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
