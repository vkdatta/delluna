export const name="file-minus-thin";
export const id="dl_3233285909ea4862b55c";
export const url=new URL("../icons/file-minus-thin.svg?v=2de6d5a6030a69320f5e9f8af74093f1e01d042c5a48eb26b39c2abe9126501b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
