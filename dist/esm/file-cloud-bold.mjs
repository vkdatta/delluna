export const name="file-cloud-bold";
export const id="dl_9dac32f0f0c848838bba";
export const url=new URL("../icons/file-cloud-bold.svg?v=47f6f563175fc38cd0cc6f84e866e0aa90df0f8d5994cea68a8ab2a917551f7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
