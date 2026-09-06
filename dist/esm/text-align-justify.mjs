export const name="text-align-justify";
export const id="dl_6965a67137ce4b0192e4";
export const url=new URL("../icons/text-align-justify.svg?v=bde79c5391e21d5f5d07a86db49c32653f3f4f56b7ed5f70a01e52ece3f7ec12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
