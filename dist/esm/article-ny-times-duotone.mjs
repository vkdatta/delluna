export const name="article-ny-times-duotone";
export const id="dl_d9e238c14dbf46a59a0b";
export const url=new URL("../icons/article-ny-times-duotone.svg?v=83ad9f861eaff2998057d59706665cbb3872a5537cbf30b03fd5b515e6094a85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
