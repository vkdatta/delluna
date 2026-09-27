export const name="lucid_1-book-x";
export const id="dl_b613d65e42f34e0294e0";
export const url=new URL("../icons/lucid_1-book-x.svg?v=50d2eaf36c9e14fbb8bb5d89fdc887d789408f6563d39dca403dd764f01f27e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
