export const name="laptop-bold";
export const id="dl_a06b8cd90c7a4a8f838f";
export const url=new URL("../icons/laptop-bold.svg?v=af2baf03df37e6f570f4362f8e79698a494608f94dd95d4bc6f1f52b6a7224a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
