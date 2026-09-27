export const name="view_carousel";
export const id="dl_47d582ae752f3eb2241d";
export const url=new URL("../icons/view_carousel.svg?v=35d28883249e9867a6487c9a69bcc98ab523c6d27a5cd177e13f3c2b8c32e39d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
