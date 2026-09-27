export const name="lucid_3-message-square";
export const id="dl_4a5e4317264148b5b9aa";
export const url=new URL("../icons/lucid_3-message-square.svg?v=33d2798a92073b6ebf7a704fd8e05536d9b9545e16dc325dbb20a5ceb74d9343",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
