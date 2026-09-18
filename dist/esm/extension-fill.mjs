export const name="extension-fill";
export const id="dl_6a2da32a055e4388a0a8";
export const url=new URL("../icons/extension-fill.svg?v=058c3c23ac5ef80fad41f76a146778e066d69542a9c1194eaf9169ff21a8a458",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
