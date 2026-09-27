export const name="number-square-one";
export const id="dl_51066a748e9247e9b52e";
export const url=new URL("../icons/number-square-one.svg?v=8deffd54b74d02dbf468928a103c841e35a8877f69343f9e92cd8e853ef30874",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
