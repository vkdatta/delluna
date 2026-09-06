export const name="dribbble-logo";
export const id="dl_62470fcd3aad4103885d";
export const url=new URL("../icons/dribbble-logo.svg?v=b5eca2427309768688fa0284fa2f5f8b4ba5da22bb3acd2fb86d35a329fd3830",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
