export const name="contextual_token";
export const id="dl_83a3101646391125a938";
export const url=new URL("../icons/contextual_token.svg?v=ad39842a80f0e5e227f8ac14b79da4884ef3e34663a926752a28f7bafd893220",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
