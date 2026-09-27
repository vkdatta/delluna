export const name="number-circle-zero-thin";
export const id="dl_a0976d7295bd41d691c8";
export const url=new URL("../icons/number-circle-zero-thin.svg?v=991513668e9e9a2d5f5ba982e3d9c17fc949782f808dfd8f27227c97e76600d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
