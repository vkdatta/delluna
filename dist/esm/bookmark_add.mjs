export const name="bookmark_add";
export const id="dl_76ed226115bedda6a536";
export const url=new URL("../icons/bookmark_add.svg?v=218c3fc74133374738431f94a905dfcf30a0db536a223450aac5f1201e4bb72a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
