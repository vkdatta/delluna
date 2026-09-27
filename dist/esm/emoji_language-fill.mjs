export const name="emoji_language-fill";
export const id="dl_40d6036248d1d3ba4d27";
export const url=new URL("../icons/emoji_language-fill.svg?v=34d86dfe5b1dae75e3f9cee10115ac6ae3013b0f1af5a0d09f6d43f65ee4e609",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
