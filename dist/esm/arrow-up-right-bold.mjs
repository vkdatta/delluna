export const name="arrow-up-right-bold";
export const id="dl_fd6411090d7f4be58764";
export const url=new URL("../icons/arrow-up-right-bold.svg?v=c08d626ffb63ca6cbcc5da51e54c90a97aed10a058ba72eb84ecda8f78532c8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
