export const name="equals-light";
export const id="dl_1b50c029f6f345749701";
export const url=new URL("../icons/equals-light.svg?v=337e2c9ab63cb2bc4fbbf0897609eb1432ff659648775668edffbffc94d8b50e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
