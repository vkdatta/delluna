export const name="brightness_2";
export const id="dl_e5a5eed8d31e6a087852";
export const url=new URL("../icons/brightness_2.svg?v=432cb97790949818d021b90bbe27f9e5b0f8d4adfcf9d9fe6761b12576b419c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
