export const name="ar_stickers";
export const id="dl_c65cd9671631b2d6fc79";
export const url=new URL("../icons/ar_stickers.svg?v=f01298c525b0721606dfab44599afbd9ccaec7f99192c36e3504b59ac7c7f763",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
