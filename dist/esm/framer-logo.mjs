export const name="framer-logo";
export const id="dl_756cd161b97d4213a0e1";
export const url=new URL("../icons/framer-logo.svg?v=ef733a1ba77edd9899ed9e552d300d037dfbc6904b01f06479fdc5ee90bb5b16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
