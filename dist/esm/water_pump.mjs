export const name="water_pump";
export const id="dl_08165f85fcea454ba2fa";
export const url=new URL("../icons/water_pump.svg?v=e9e618224b44eaa98847f04c5ccdf62724277c1a4461d6f4353d41d446045ce7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
