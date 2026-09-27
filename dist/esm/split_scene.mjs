export const name="split_scene";
export const id="dl_b70743919aec477ddc94";
export const url=new URL("../icons/split_scene.svg?v=26962275919b6dda68d69d3358a59379e1e819c76764fea0c6ae63c6b5909bc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
