export const name="apple-podcasts-logo-duotone";
export const id="dl_c05b4aa62b9e4c04a9bc";
export const url=new URL("../icons/apple-podcasts-logo-duotone.svg?v=1a8c35bf648b644c99a10a897857c3038eaf4f677d5aaae2c9dec6a1df47ecda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
