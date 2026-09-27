export const name="format_strikethrough-fill";
export const id="dl_4e8c3f453965787bc0f4";
export const url=new URL("../icons/format_strikethrough-fill.svg?v=c622ce425fc0f0149fdf86cb932c3ebbfd23c4bb92684c8b5e87a50d980f800d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
