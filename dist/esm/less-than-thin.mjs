export const name="less-than-thin";
export const id="dl_d0fdfc6515434daca882";
export const url=new URL("../icons/less-than-thin.svg?v=fcf520946e58f748c0d9a66e0df0278513ae95d8140c34e970b394015c5bc8e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
