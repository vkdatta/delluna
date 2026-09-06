export const name="bird";
export const id="dl_f9886e16770942b3be80";
export const url=new URL("../icons/bird.svg?v=31673692ae794616d65c1e6f8aa4b57bad075953ab4498d76d60dbec8f97284c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
