export const name="article_person-fill";
export const id="dl_38a0d89852954a1296d9";
export const url=new URL("../icons/article_person-fill.svg?v=6bf0637f2c78857c9190a455b08107c1c3e8fdd6b3dacc66294c6a1f43373268",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
