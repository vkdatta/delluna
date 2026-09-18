export const name="podiatry-fill";
export const id="dl_5a741a36e3b847248dad";
export const url=new URL("../icons/podiatry-fill.svg?v=e2388ed799f35e6478cff3db393e78072c927818b541e05696df3b251d940047",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
