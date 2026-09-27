export const name="paint-bucket-duotone";
export const id="dl_b426ec556bbf417c9edc";
export const url=new URL("../icons/paint-bucket-duotone.svg?v=3f6565ba5780e9daf6a300e52b7277fa8aa733b52614f8de881f9ef7fed804f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
