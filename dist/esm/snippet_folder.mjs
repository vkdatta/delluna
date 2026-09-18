export const name="snippet_folder";
export const id="dl_840f55a5faa84e9ebd38";
export const url=new URL("../icons/S/snippet_folder.svg?v=b93929e35fd819031c1053b70e0ffffc998acb363f213fb36dcb12651d26d167",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
