export const name="file-text-fill";
export const id="dl_37ae2e18caae41cd95de";
export const url=new URL("../icons/file-text-fill.svg?v=8c6f36452a441d39886ad7929778c2a90ea66cca519490da4918e7da7bade242",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
