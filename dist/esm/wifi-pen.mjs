export const name="wifi-pen";
export const id="dl_06f024b2770d4a2a9e47";
export const url=new URL("../icons/wifi-pen.svg?v=d623c56222bbc81026bd31302c0b55cc725c314ac3c631b3087b84a4bac14061",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
