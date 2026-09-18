export const name="emoji_symbols-fill";
export const id="dl_9e4b4500a537492baa57";
export const url=new URL("../icons/emoji_symbols-fill.svg?v=0a7a7b33105e66c8cc100e6c76f16a6bee8af245243aac88a1a0a5dd41e835eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
