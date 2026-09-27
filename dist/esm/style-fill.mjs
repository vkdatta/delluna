export const name="style-fill";
export const id="dl_8213417f6e8e3ff8353a";
export const url=new URL("../icons/style-fill.svg?v=6b61aaba21ac9729c73b0d4afe9332ada4dc7400f9d7b4d995f4cf6eeb616eb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
