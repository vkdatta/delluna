export const name="align_stretch";
export const id="dl_99a0b408eb8d4987936d";
export const url=new URL("../icons/A/align_stretch.svg?v=493ab9cae0d76ada8dcc0d1a90c5afa179964671130337fce0e6333f76d30a8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
