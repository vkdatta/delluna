export const name="article_person-fill";
export const id="dl_7f01f633a16050919d01";
export const url=new URL("../icons/article_person-fill.svg?v=b18fbc2da636b1ced9cae185a96a00bbb90f0399358587e4c37257fb43c5ca52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
