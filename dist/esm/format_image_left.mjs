export const name="format_image_left";
export const id="dl_a8e605846873feb97bb0";
export const url=new URL("../icons/format_image_left.svg?v=5293c9b4496bd7d78994001913cba0138d066e6b5a8aead776a5afb20e9bd412",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
