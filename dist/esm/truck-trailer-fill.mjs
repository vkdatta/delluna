export const name="truck-trailer-fill";
export const id="dl_888de3b37fe245d99c03";
export const url=new URL("../icons/T/truck-trailer-fill.svg?v=ddb68c1bc7068ebf2c40762e14c963148b514591d45648e2bd8b8ee7965f5094",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
