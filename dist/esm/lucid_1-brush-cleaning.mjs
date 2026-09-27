export const name="lucid_1-brush-cleaning";
export const id="dl_43752169de534b008bab";
export const url=new URL("../icons/lucid_1-brush-cleaning.svg?v=ebc0dde74c4b1bb4945f1b1019f7cf4ccb4e1174f856942a248563d3a9aab68e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
