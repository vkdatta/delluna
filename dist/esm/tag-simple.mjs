export const name="tag-simple";
export const id="dl_f4b8f461d5bafce89b7a";
export const url=new URL("../icons/tag-simple.svg?v=9b2e32d198139c772efdb1d4b3338122d65740a0c1dce975b03e3e6a6d9bbf2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
