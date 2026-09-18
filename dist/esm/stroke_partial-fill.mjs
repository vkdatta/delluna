export const name="stroke_partial-fill";
export const id="dl_7fcfb1315001468aba45";
export const url=new URL("../icons/stroke_partial-fill.svg?v=23aa9d70709897a7b40b053f6e8baf67ca87bfd082477baa58e2070966e0273a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
