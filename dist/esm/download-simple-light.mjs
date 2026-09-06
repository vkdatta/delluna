export const name="download-simple-light";
export const id="dl_c840de55f3684ed9ab80";
export const url=new URL("../icons/download-simple-light.svg?v=dea5e244ee9cc9f78a9832b690f124d86cf71bc33b7a3ec809d53ecc3ba6b4a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
