export const name="tibia_alt";
export const id="dl_09f15ccddadf1d3b7db5";
export const url=new URL("../icons/tibia_alt.svg?v=6de9cebe9d77652573b6ec13e05c5e15041255e00d03babdf7942144fd8dd094",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
