export const name="database_search";
export const id="dl_1aba96b99d8d3e85ca42";
export const url=new URL("../icons/database_search.svg?v=eef34ef3f724ea6cd5a76c5e3af1ee7ee8289cb984e35b2ffa413bf02451ab9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
