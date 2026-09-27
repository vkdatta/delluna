export const name="lucid_3-move-up-left";
export const id="dl_ca064221a53d4cd992cb";
export const url=new URL("../icons/lucid_3-move-up-left.svg?v=a939204459b4fb884bc2bfa1692e30ec93e93650fc9e0879ae5cdec6cb360c33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
