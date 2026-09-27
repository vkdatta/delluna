export const name="dots-nine-light";
export const id="dl_d450e0ca1d664706b9e0";
export const url=new URL("../icons/dots-nine-light.svg?v=48f2f2184a12a52a8b121bef5126f85afeb0d88f90042ba19bca3372fd17dcc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
