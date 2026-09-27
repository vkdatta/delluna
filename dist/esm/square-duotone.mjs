export const name="square-duotone";
export const id="dl_49ad038101b0273129f8";
export const url=new URL("../icons/square-duotone.svg?v=fd1cbcff4f2a6f67b41f0a4c1c790099d94f5def95d4b8b90e2a82da2d62919e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
