export const name="lucid_2-helicopter";
export const id="dl_e11d1a95a2804f34aca1";
export const url=new URL("../icons/lucid_2-helicopter.svg?v=62a9a19713b2e007494c49517c6783d2b9977d36f442f1ad3c5cda851d8b0be3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
