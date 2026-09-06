export const name="file-magnifying-glass-bold";
export const id="dl_c65e129c5e0e48afac7d";
export const url=new URL("../icons/file-magnifying-glass-bold.svg?v=a3155413c5d52e259750f4ef7f0b080d22adbdda2074b949bab9c3b4774bb39e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
