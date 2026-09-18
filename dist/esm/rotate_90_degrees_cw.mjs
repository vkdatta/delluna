export const name="rotate_90_degrees_cw";
export const id="dl_445f9ad7b7344d92bd3b";
export const url=new URL("../icons/R/rotate_90_degrees_cw.svg?v=b9e53546084ad9c0c5d4e53e5938160f89d92d85fa46d9826cffffe95ec4dc5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
