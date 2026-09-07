export const name="speaker-x-light";
export const id="dl_ae1cd8eee6604de2940b";
export const url=new URL("../icons/S/speaker-x-light.svg?v=09d2bd42cfd2b52b5a178a298a3be2bf037a4f77947aa06d7133cc06a0f5245d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
