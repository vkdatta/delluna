export const name="file-html-fill";
export const id="dl_bd9dcb2716a04a2a94eb";
export const url=new URL("../icons/file-html-fill.svg?v=05b2adccc93dc4f8f28986b78f16df59c32344e2ca4f70883b3b0830753160a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
