export const name="lucid_3-pill";
export const id="dl_6f494a8475a143478ff4";
export const url=new URL("../icons/lucid_3-pill.svg?v=2fcd96c7673ac107e204d610f4a039a9e4e70872d01479b5ff47951c1c53da6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
