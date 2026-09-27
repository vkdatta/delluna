export const name="nature_people-fill";
export const id="dl_33bed89f7df8300271f8";
export const url=new URL("../icons/nature_people-fill.svg?v=3a29bbd7f7183d93667070a9932b54de08eb3c3c1abc54445701524ab06cdc80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
