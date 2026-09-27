export const name="margin-fill";
export const id="dl_3b83d7b03b8621a94219";
export const url=new URL("../icons/margin-fill.svg?v=cd96e60ab6c4fb910677ae421165f3e110eac0fb92ad5a8c56e27ef5f576cbf8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
