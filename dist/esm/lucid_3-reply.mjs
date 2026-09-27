export const name="lucid_3-reply";
export const id="dl_6cba9f3fcb06416b95e6";
export const url=new URL("../icons/lucid_3-reply.svg?v=b605ea2666632bc11ff925cb1a09b84db69e9c5e16c0bd5c1bc867becd495ab6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
