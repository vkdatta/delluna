export const name="heart-straight-bold";
export const id="dl_7b4a8e1594e84ebfb617";
export const url=new URL("../icons/heart-straight-bold.svg?v=ace642177089b4191a3c2b8873153d52013cf6a8b30ee47d5d2ecdc8131d7425",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
