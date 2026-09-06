export const name="align-left-simple-duotone";
export const id="dl_4bfe7996a5ca4c52a09d";
export const url=new URL("../icons/align-left-simple-duotone.svg?v=76321c057ab5bdc0c7652cb0d855b6ae482d2d6cbc7639f66d9580e5d5ecbef1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
