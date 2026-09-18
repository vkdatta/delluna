export const name="photo-fill";
export const id="dl_9ab27e2a6cf84f7f95eb";
export const url=new URL("../icons/photo-fill.svg?v=b14941f00299c5a78366a39effed8515863c89fd42e6080d95e29133c508d2a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
