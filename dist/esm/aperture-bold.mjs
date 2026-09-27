export const name="aperture-bold";
export const id="dl_7ad023ab0abc47f2b8be";
export const url=new URL("../icons/aperture-bold.svg?v=37db3f1e39cb6a9ad4595697d7b12ea76056f82fa2722abf0d48ee0c87c2352a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
