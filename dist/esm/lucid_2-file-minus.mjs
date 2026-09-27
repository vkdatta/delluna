export const name="lucid_2-file-minus";
export const id="dl_bf57b22802db4e97a043";
export const url=new URL("../icons/lucid_2-file-minus.svg?v=d81ee96523a1e67ca99d4f33b32b7aceaccaa48b60d6718ecee34be5e2678d4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
