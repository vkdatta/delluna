export const name="heart-half";
export const id="dl_af454886685545ef9313";
export const url=new URL("../icons/heart-half.svg?v=46ccfbce8583ecee24e6a90c4dbb9abffce364c78c3797b6cb6d611cd870f79d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
