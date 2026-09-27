export const name="lucid_1-clock-8";
export const id="dl_824c5146837c4a228c9c";
export const url=new URL("../icons/lucid_1-clock-8.svg?v=5970c92a7f9cac0bc0bf4e1ef51b5ebb651c48aa719335e34fdd4ab91201b097",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
