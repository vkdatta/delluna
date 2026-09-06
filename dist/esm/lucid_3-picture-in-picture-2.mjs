export const name="lucid_3-picture-in-picture-2";
export const id="dl_c42f177b32e24ba889c7";
export const url=new URL("../icons/lucid_3-picture-in-picture-2.svg?v=204a276d80e70bc20e22c4c08a0a836f8c8b6960c77e747e60cce0771c9fca8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
