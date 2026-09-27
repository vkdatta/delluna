export const name="lucid_1-broom-sparkles";
export const id="dl_7791b3ca8a27444480e7";
export const url=new URL("../icons/lucid_1-broom-sparkles.svg?v=8db6c0173c39ff0a0e1837483368e1daab1ef5236cd08606bf85d6bf27b33a0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
