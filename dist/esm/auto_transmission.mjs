export const name="auto_transmission";
export const id="dl_f585c7fad39446d69186";
export const url=new URL("../icons/auto_transmission.svg?v=8ce7dab7aec461c2a019eaf678043f3f0f5cd46190c6a95cb9c6476f825f7bc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
