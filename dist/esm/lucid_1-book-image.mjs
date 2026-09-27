export const name="lucid_1-book-image";
export const id="dl_4b974dd29be04f43b7aa";
export const url=new URL("../icons/lucid_1-book-image.svg?v=c060185a913d178c80ebe71ea0ca631316ed4d4588c1e15aa4fe99354ea8e685",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
