export const name="bowl-food-thin";
export const id="dl_d14bec6a3f1b4d1cb885";
export const url=new URL("../icons/bowl-food-thin.svg?v=352a0f0e7d619206857dd2bb1b6ac50d3e3541e84410de78b5ffa1872fa0062a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
