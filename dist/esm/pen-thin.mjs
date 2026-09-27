export const name="pen-thin";
export const id="dl_15af2e58216f47f88b39";
export const url=new URL("../icons/pen-thin.svg?v=265fc744df5672a8d0f2b06bd9dc74408b8180fcaf0b507dab6ead3fd511daaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
