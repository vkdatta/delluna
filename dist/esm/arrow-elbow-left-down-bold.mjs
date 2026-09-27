export const name="arrow-elbow-left-down-bold";
export const id="dl_5684e0f5c0524fd0b2b8";
export const url=new URL("../icons/arrow-elbow-left-down-bold.svg?v=c36a632c038553314d2e51181024891fb1a4ce57b1701e7797ea1fc7b37bd028",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
