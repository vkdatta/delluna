export const name="boat-bold";
export const id="dl_a3c59d004690494bb991";
export const url=new URL("../icons/boat-bold.svg?v=8f11fd14246e51af51a84d5fc7ac153e76d1a5144611260dd25037d66571d4fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
