export const name="pants-light";
export const id="dl_a1f7ae69fd0746879cce";
export const url=new URL("../icons/pants-light.svg?v=7397ffc6caa418e7ca8c96ec4981fa44e7d152f560b88b00b4d0bb32997438aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
