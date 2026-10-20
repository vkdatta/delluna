export const name="upload";
export const id="dl_6698002408934c3eaa08";
export const url=new URL("../icons/icons-svg/upload.svg?v=f0392e67fea2badca977235d0d8d584a93b74ac9556e0af837300761278127e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
