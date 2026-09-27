export const name="leaf-duotone";
export const id="dl_721585956dbb45b8b9a7";
export const url=new URL("../icons/leaf-duotone.svg?v=c86678f912bbf3a087eec326ed672956978417c973c59119179f9cdeadf02a81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
