export const name="closed-captioning-bold";
export const id="dl_805677d3225f4fa2a397";
export const url=new URL("../icons/closed-captioning-bold.svg?v=080a9082a2c86856a3b9263dfb4c34b6396956f59742757e0c9c3345fb344ad6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
