export const name="file-cloud-bold";
export const id="dl_9dac32f0f0c848838bba";
export const url=new URL("../icons/file-cloud-bold.svg?v=bb42bcb82b10477da0d947e0bab0cf4d37f76c02cf247773029717bdc8de0f8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
