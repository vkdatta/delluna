export const name="chair_alt";
export const id="dl_d7f0fb138c12e2a847c8";
export const url=new URL("../icons/chair_alt.svg?v=e153c0c634231983c2979fbc0c2918c41d0cfe328488386fe957487dd5b0a8bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
