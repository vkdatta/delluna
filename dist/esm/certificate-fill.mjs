export const name="certificate-fill";
export const id="dl_22d5a671d94d483eaa55";
export const url=new URL("../icons/certificate-fill.svg?v=f67dfaa06ec8f7df1cd4211ca7eb538f281065a06127eb7272cbb80627080793",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
