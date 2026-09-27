export const name="file-bold";
export const id="dl_34a477f0ec024220b171";
export const url=new URL("../icons/file-bold.svg?v=eb7ac9d9e63b3d9ed549410bca2c3b36259db113ac8d3846ab7acb227d304faa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
