export const name="lucid_1-book-user";
export const id="dl_4a0e580a7c904da8ab19";
export const url=new URL("../icons/lucid_1-book-user.svg?v=c6e4543a7960acfaa643eb92a246ca139e7ddf42faa4bc2a01da11e14141f99f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
