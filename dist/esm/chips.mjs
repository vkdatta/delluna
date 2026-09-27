export const name="chips";
export const id="dl_78bb6a944d1849da7f01";
export const url=new URL("../icons/chips.svg?v=13ae4f4296ddeb0dbe602f6181fd4e146e38f79b4f079901b978b5924b38178e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
