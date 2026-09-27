export const name="lucid_1-cloud";
export const id="dl_ff174bb3bd1545f28458";
export const url=new URL("../icons/lucid_1-cloud.svg?v=b8b0623980ab0ad1b9cda566a11b577f16dff757b84d6d57d06bdb79f61cfe8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
