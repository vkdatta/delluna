export const name="speaker-x";
export const id="dl_af3c4ef3d44f5abb404c";
export const url=new URL("../icons/speaker-x.svg?v=0d7285680d353563a14ca33c7043fb8c4592faa90f80b1e62d5b1821718c5939",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
