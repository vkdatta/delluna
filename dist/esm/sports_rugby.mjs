export const name="sports_rugby";
export const id="dl_d309e18d7fa66cb70d77";
export const url=new URL("../icons/sports_rugby.svg?v=0418b6d9ed8bb5c2b5d49978e3adf013674191ca89190758d8a8a4bbcf430a0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
