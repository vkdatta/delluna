export const name="text-columns-light";
export const id="dl_cc3062ddb050b07c141c";
export const url=new URL("../icons/text-columns-light.svg?v=5f212165f74c840e191080aed1c77eeb19d6877b8fd5b4a705f8cfda05cd0952",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
