export const name="phone-list-thin";
export const id="dl_d43910219c7e48ad99ea";
export const url=new URL("../icons/phone-list-thin.svg?v=c5b1fc37f77208297aaf0cd2ed258f5be8c2a129ce0affd8342ab849bbed15c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
