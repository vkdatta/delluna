export const name="vertical_shades_closed-fill";
export const id="dl_2ea377733ae8d33d1b13";
export const url=new URL("../icons/vertical_shades_closed-fill.svg?v=df9e44ce364477f315a5db793cec525d5627ec872d35ce2755dd14f7350bb444",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
