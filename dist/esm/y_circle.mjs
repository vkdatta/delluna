export const name="y_circle";
export const id="dl_d7aab3fb09867a785592";
export const url=new URL("../icons/y_circle.svg?v=47fadc50a80d4a39763c77fb0560376bc6021529c23cf183879e17e076a60259",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
