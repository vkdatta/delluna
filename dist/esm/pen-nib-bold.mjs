export const name="pen-nib-bold";
export const id="dl_ae381aa517604d7483eb";
export const url=new URL("../icons/pen-nib-bold.svg?v=d85ff1d538bbeab0477d9deefc84bc0f6e279bec9d40abee500de8f846f77719",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
