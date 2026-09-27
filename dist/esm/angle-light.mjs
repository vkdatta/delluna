export const name="angle-light";
export const id="dl_e0c58ee97ed44929a0fb";
export const url=new URL("../icons/angle-light.svg?v=fc3dfc6deb08a79d702045af04918ef62a221001ce771a94b5c44d8ce776dfcd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
