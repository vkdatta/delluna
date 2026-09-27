export const name="key-return";
export const id="dl_198e62c149104800b1ba";
export const url=new URL("../icons/key-return.svg?v=e6fe8d927da7123d60d473140fd1e649e12b79c67e49c41b8d0b2003b7735ced",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
