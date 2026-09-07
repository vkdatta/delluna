export const name="lucid_3-send-to-back";
export const id="dl_aadaca469c3548adb967";
export const url=new URL("../icons/lucid_3-send-to-back.svg?v=31a6177a26e3c70e11df2b1adf91e013312cfaec56fab32ad46e136f644cb861",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
