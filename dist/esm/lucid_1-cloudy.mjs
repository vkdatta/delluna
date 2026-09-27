export const name="lucid_1-cloudy";
export const id="dl_39dec73da1f24f36bd1c";
export const url=new URL("../icons/lucid_1-cloudy.svg?v=b9240f021eb21ea8efc8ff16406a30d9b6443ad6213fb52647ab647f72ce8dd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
