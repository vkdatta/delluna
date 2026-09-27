export const name="file-arrow-up-bold";
export const id="dl_c67dc6a267ec411aaa25";
export const url=new URL("../icons/file-arrow-up-bold.svg?v=5de94b8d6ccec465318fcc59b21eb03cbaec32164cec75264186abf48c3966f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
