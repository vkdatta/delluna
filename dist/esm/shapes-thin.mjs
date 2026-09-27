export const name="shapes-thin";
export const id="dl_bc99747ce3ace3863bb1";
export const url=new URL("../icons/shapes-thin.svg?v=7c99789a3faf20b9a554f2b9cedc6b518f4cb8987e8412b0c3bc869e9f28c65e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
