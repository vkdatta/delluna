export const name="arrow-fat-lines-right-fill";
export const id="dl_8214e328a8b24a6490b3";
export const url=new URL("../icons/arrow-fat-lines-right-fill.svg?v=17c1c3cc4b9ba7818a6c97327b964bcc94588fc341f3eeff900c5f7a2a37fa52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
