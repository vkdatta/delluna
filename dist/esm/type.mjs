export const name="type";
export const id="dl_11ea2afa1c054dd7a986";
export const url=new URL("../icons/type.svg?v=daaad39e26ad0bd4bc7c04e383212147dc6bd9f0290dda757d982ddaae766acf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
