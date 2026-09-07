export const name="file-jsx";
export const id="dl_afa8307b954844cd99d8";
export const url=new URL("../icons/file-jsx.svg?v=2cb84a0129bd9910ea42c5c11f0a8d2b56a0f7c9788727e03ae5656a0c057d9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
