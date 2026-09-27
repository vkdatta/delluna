export const name="remove_moderator";
export const id="dl_7a6a015bfd7fce362c85";
export const url=new URL("../icons/remove_moderator.svg?v=d639f42e9b36a33fc33b5788b1a320f312dc8e5b7891a5ddb2bdcfd6ee6a8896",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
