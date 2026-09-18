export const name="face_5-fill";
export const id="dl_420c669707f94302be9e";
export const url=new URL("../icons/face_5-fill.svg?v=b732f390cccbc4b67e14a1ac754e6425175af21ebb827cf47bf4b04e4c78cdcd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
