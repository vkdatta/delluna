export const name="download-bold";
export const id="dl_0865be2bae4d4d049d56";
export const url=new URL("../icons/download-bold.svg?v=5ac9c00d24dbe4b972b959b69268e6aa151a96cf05c71a8be6bbb1cdc4cb9edb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
