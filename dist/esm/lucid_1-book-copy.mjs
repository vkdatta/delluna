export const name="lucid_1-book-copy";
export const id="dl_7cb44855fbf444bc99ee";
export const url=new URL("../icons/lucid_1-book-copy.svg?v=4db38b833a71708aa180b8c95c0e08bafdb0979aa64e81c7406324aefbb9c9dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
