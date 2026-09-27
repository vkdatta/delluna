export const name="sentiment_frustrated-fill";
export const id="dl_ba08b56c00cfdbad6404";
export const url=new URL("../icons/sentiment_frustrated-fill.svg?v=557c508f719d4f4a9e72eebe694342e155cf389dbe2855e3365b65741884cd14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
