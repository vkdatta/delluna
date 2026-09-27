export const name="intersection";
export const id="dl_93cf2756fdef4078a944";
export const url=new URL("../icons/intersection.svg?v=8b8c684b0ab5dccaae9f2251ead5151851b54fcd798d05c7aaaa812b1586f23b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
