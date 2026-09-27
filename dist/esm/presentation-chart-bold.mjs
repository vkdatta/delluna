export const name="presentation-chart-bold";
export const id="dl_7b64e663d2d9471cb0c0";
export const url=new URL("../icons/presentation-chart-bold.svg?v=8aae2e721e409d6398e02d3591e5486ab6a99214c0a8a90ada8a8d28f72154ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
