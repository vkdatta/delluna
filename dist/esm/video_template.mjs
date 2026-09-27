export const name="video_template";
export const id="dl_04c2322007f4c9a75649";
export const url=new URL("../icons/video_template.svg?v=ee4c0f27df285ffb2e10eb4efa8722e4fecff4cdf56b9bf42460e84bcd99e92f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
