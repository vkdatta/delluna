export const name="split";
export const id="dl_43ad1f214a3e40388a4c";
export const url=new URL("../icons/split.svg?v=d66d360fe04fb152b6699cee33f791b12181c1874a737d63a908fa2a3bd643ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
