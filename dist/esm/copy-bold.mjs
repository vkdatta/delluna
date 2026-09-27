export const name="copy-bold";
export const id="dl_3166dabb25414b8c805c";
export const url=new URL("../icons/copy-bold.svg?v=180bc0e9943a86a4c6e9cd7a4e36758c77189d4a766cd506959143f20ec29cac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
