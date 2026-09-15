export const name="format_image_back";
export const id="dl_f7c09bb4b5ed41c18b35";
export const url=new URL("../icons/F/format_image_back.svg?v=050f26504b54215a6ebe483b3644c228f454cbdc85630b0eee4726d7abdfb123",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
