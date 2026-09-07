export const name="sketch-logo-bold";
export const id="dl_78e0f933489043a3a285";
export const url=new URL("../icons/S/sketch-logo-bold.svg?v=913033148de1e52fc22cf3f3891088e94a11b034fff76a05b8f950626e9c3109",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
