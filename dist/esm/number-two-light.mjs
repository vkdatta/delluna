export const name="number-two-light";
export const id="dl_826feccf59484b3baf0e";
export const url=new URL("../icons/number-two-light.svg?v=1cedff76135c4510b7d38f1b3f548520bfc19b6a9c7009bab8726268aee30e9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
