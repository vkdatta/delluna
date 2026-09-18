export const name="wash-fill";
export const id="dl_faaa6b4c231a4c7592fc";
export const url=new URL("../icons/wash-fill.svg?v=b72d82232a29dcb0c32609aa3008ffa0b4338a9dd0d9f4c055434659b9faee8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
