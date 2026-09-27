export const name="paperclip-thin";
export const id="dl_588623c840dd4ab98d8c";
export const url=new URL("../icons/paperclip-thin.svg?v=f3cb9aed3b8d5db6fab713f205aa8db9541e89f0ea25cac9282bcfc4fbb83d3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
