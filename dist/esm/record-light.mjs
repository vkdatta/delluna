export const name="record-light";
export const id="dl_66f9adab8f6c4153bc23";
export const url=new URL("../icons/record-light.svg?v=64ad9e6809e250240ac8510f1373c634a3f4991ddaf5576442c5ce9a530ba1f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
