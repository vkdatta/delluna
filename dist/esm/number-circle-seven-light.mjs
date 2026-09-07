export const name="number-circle-seven-light";
export const id="dl_1d07cc6cb79a4a478a45";
export const url=new URL("../icons/number-circle-seven-light.svg?v=b4d21a30eaa1443d586598083fce8c80aea25f33a537196ff088f4e427eb3024",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
