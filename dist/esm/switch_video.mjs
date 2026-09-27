export const name="switch_video";
export const id="dl_f5843700dc38f45c1031";
export const url=new URL("../icons/switch_video.svg?v=8118c14036776211aca5764a52a7cb3138ae50d354229535d30e3185aae420be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
