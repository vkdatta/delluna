export const name="bookmark_added-fill";
export const id="dl_48471bb92fbfdf2e12bc";
export const url=new URL("../icons/bookmark_added-fill.svg?v=7643ddbfaec45ecd45ad42c4954559d37535d2b06441e9581ca365542e9f5726",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
