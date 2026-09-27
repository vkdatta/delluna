export const name="trolley-suitcase";
export const id="dl_d82305a340951fab011e";
export const url=new URL("../icons/trolley-suitcase.svg?v=5496384e25cf73a86cf88b6628ece6d3bd772a265807b76139ad08af712e135d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
