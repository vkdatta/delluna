export const name="handbag";
export const id="dl_743422bfa95e46c2bfa8";
export const url=new URL("../icons/handbag.svg?v=c43ee9c92a6d084cbee3362629b64468275dade0cabc0f6c0d4ce3b4496940a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
