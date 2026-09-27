export const name="video-conference-bold";
export const id="dl_99c1d0b62000d8b87ca8";
export const url=new URL("../icons/video-conference-bold.svg?v=c3105c3848b4bdd289b4f5f6c184b57c19a66a53dc62a48389d19e5c76d8403b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
