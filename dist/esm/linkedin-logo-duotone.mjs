export const name="linkedin-logo-duotone";
export const id="dl_9efa49a9533d468e8be9";
export const url=new URL("../icons/linkedin-logo-duotone.svg?v=4042c4251371f7c5a8f781d2432d3c93f8faceae8f2da733c4ab4f70e617689f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
