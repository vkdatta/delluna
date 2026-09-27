export const name="closed_caption_disabled";
export const id="dl_92eec7f91a8d638d7061";
export const url=new URL("../icons/closed_caption_disabled.svg?v=8d8b14d4de9e4e6e205106dfa5e22b2ed130cd96699e688f61105f5b794a77f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
