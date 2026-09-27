export const name="pinterest-logo-bold";
export const id="dl_6facd3cd829b4df0a586";
export const url=new URL("../icons/pinterest-logo-bold.svg?v=37e0da927261296082b40a38d112c6f3ec65987cc51ecaef1038d806ad5de708",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
