export const name="scene";
export const id="dl_61a3ff2b9b304705adfd";
export const url=new URL("../icons/S/scene.svg?v=2b1c4f66cb989432ca8e5f7f14594b0e4369f515c4d7a826761d04a90c0b9322",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
