export const name="send_and_archive";
export const id="dl_3dcb743e7254f0e35244";
export const url=new URL("../icons/send_and_archive.svg?v=d9592064aa1404c6aec22f2f05119061847b8941f158cb9704ad942483bf174a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
