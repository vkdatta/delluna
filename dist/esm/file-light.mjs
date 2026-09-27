export const name="file-light";
export const id="dl_8ffbef1938964e7d8149";
export const url=new URL("../icons/file-light.svg?v=df0b195079920f018ea21ef6811d0b4c3392b8ea371460835ea075772573bfe3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
