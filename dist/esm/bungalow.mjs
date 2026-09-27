export const name="bungalow";
export const id="dl_5ff43c98be37e9693f32";
export const url=new URL("../icons/bungalow.svg?v=bfad0a70acf8ef00e2e6da9440f19a2720bcb1e88c233d494c7fced9b8c27c9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
