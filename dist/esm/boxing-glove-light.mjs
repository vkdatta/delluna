export const name="boxing-glove-light";
export const id="dl_6ff8d1ec1ee545858953";
export const url=new URL("../icons/boxing-glove-light.svg?v=96bfec3bdebacbac42e8d01e611731313e1cf16c8b67c8f900c9a8d423760066",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
