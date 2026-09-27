export const name="engineering";
export const id="dl_6c4143a328769c66f16a";
export const url=new URL("../icons/engineering.svg?v=9909c191e96ab78e1b436afe0d04503b494b911415875a87a6e688f9ef8b13b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
