export const name="yoshoku";
export const id="dl_dcbfde0732d09bbcaa78";
export const url=new URL("../icons/yoshoku.svg?v=704ef44a1a7362775fefc060a151299ab00677376974b1df6e9442c8f2452ab2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
