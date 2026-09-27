export const name="trolley-thin";
export const id="dl_f67f2421a8fc0ca3a9b6";
export const url=new URL("../icons/trolley-thin.svg?v=dc1f84a45af8ffc89f20cf6293c0139b7e14078d3128469bb31071f4fe44adeb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
