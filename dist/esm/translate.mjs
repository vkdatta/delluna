export const name="translate";
export const id="dl_f636335415a9832dc052";
export const url=new URL("../icons/translate.svg?v=b335fca433a399d38475e2a3befa6a8a001443a3b7020757934f887c7c8573c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
