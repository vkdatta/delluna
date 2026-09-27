export const name="file-cloud-bold";
export const id="dl_9dac32f0f0c848838bba";
export const url=new URL("../icons/file-cloud-bold.svg?v=70bb6c9b03a2de69ba96d103526b8de77f13624a5f6dc33661b0174e8e5264b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
