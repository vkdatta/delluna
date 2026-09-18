export const name="minimize-fill";
export const id="dl_eb0a4380b073448d8230";
export const url=new URL("../icons/M/minimize-fill.svg?v=873407f4a1c02e8ba0337e445f19cdf685b9992d98505f3b64f0c6235d77fbd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
