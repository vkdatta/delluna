export const name="certificate-duotone";
export const id="dl_738afec8eb24434ebde7";
export const url=new URL("../icons/certificate-duotone.svg?v=6669f5abe8389f6de0091178ebeef801557cd9c1b6f2d64af0e121dc891ed377",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
