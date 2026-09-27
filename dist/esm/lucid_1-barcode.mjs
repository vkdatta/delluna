export const name="lucid_1-barcode";
export const id="dl_71a900af60a44eacbfa9";
export const url=new URL("../icons/lucid_1-barcode.svg?v=396f37b9da68aee626a271d39657e4aca081787116912a6318193f960ce20177",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
