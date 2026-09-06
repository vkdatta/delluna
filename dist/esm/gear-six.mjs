export const name="gear-six";
export const id="dl_66eb1a4a60ba4a2aa183";
export const url=new URL("../icons/gear-six.svg?v=2bb05ec80cc37505a3f21c74989dbb297ab8442a668f5ffbd6a8f7c1d5794c7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
