export const name="skype-logo";
export const id="dl_3a9efc2c600446cba8e5";
export const url=new URL("../icons/S/skype-logo.svg?v=d519135e974fd159d46972a2b98511fd4b9e443faae0a259cb5584872b0c27ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
