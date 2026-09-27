export const name="arrow-elbow-up-left-bold";
export const id="dl_16c68b2be6b740b2af9f";
export const url=new URL("../icons/arrow-elbow-up-left-bold.svg?v=f702f9ab0f7da3b52fe27784239d27c4793bf0b5d5c6937f6b872b143fe77197",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
