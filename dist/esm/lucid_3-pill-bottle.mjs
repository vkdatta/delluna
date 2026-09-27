export const name="lucid_3-pill-bottle";
export const id="dl_95a22a608e3e4e09ba3b";
export const url=new URL("../icons/lucid_3-pill-bottle.svg?v=6181b0e71c0ff434a821af5e852ca47836a21f757a8f0fad0ce37ff006c0f39f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
