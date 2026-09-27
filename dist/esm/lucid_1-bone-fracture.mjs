export const name="lucid_1-bone-fracture";
export const id="dl_5bfeea168fca42c1a777";
export const url=new URL("../icons/lucid_1-bone-fracture.svg?v=c8625bdcffe9dfcd9e4660220152b1ca7d46313861292d6acf90bba1989fea34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
