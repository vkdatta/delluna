export const name="trolley-suitcase";
export const id="dl_6a081462167a62d9a9f5";
export const url=new URL("../icons/trolley-suitcase.svg?v=3f783482fcea2054178e3f6551e93c5f4261f0c16f765b7bb78001222ca6a12f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
