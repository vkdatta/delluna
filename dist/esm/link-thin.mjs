export const name="link-thin";
export const id="dl_fd622d0d456044df995b";
export const url=new URL("../icons/link-thin.svg?v=5c9c8b66587235bf0af81f9176750597d0cc716baef48cd90a079b8d9a50dc48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
