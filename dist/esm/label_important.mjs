export const name="label_important";
export const id="dl_dc649b5c2d0946256f33";
export const url=new URL("../icons/label_important.svg?v=9e1d6f1d38a61211301ae22dcbdc6fd7c29164aeb370bb13c4833eb51b096ec0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
