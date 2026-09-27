export const name="file-c-bold";
export const id="dl_ea697ae4ce8c492c9616";
export const url=new URL("../icons/file-c-bold.svg?v=bdd42a3187e1269247aa86d8ec128869f72abb34118242e2bfd78b31dc5191b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
