export const name="lucid_2-corner-up-right";
export const id="dl_5301c6d5fa4e40498021";
export const url=new URL("../icons/lucid_2-corner-up-right.svg?v=b784f7835e9c82e63f8b0426387211504d3b8652a188a1cc81a32529d22faf2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
