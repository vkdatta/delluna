export const name="folder_zip";
export const id="dl_851467339b0a7708cbc0";
export const url=new URL("../icons/folder_zip.svg?v=4950599faa4fe2ac6dad1f080af0fac38d10ad009c6990770cded7b9bc063400",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
