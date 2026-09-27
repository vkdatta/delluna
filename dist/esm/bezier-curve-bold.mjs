export const name="bezier-curve-bold";
export const id="dl_d5b0f38a8b9846878087";
export const url=new URL("../icons/bezier-curve-bold.svg?v=15431fd26a61022d8a464c888aa66c96ae9023b2b425e72510ddb2c53c704375",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
