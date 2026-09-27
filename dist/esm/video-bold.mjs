export const name="video-bold";
export const id="dl_33135a13a3932ca40eef";
export const url=new URL("../icons/video-bold.svg?v=de4b818b261ec6ca079a9e03042c3a84a093aa6450bb99bc718090ef6ed13a67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
