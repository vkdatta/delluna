export const name="tilde";
export const id="dl_12d129c4b686ff2c5fb8";
export const url=new URL("../icons/tilde.svg?v=978d0e6a86d0dd3193777b9caede2135cb6a2ea4cba9abaee2fa18a0ee06622a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
