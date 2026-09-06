export const name="lucid_1-church";
export const id="dl_381b0097a4234eadb0a5";
export const url=new URL("../icons/lucid_1-church.svg?v=8cf1ecdd40d31a4527a5be2989643cc8dedd5a5441fe613f8bccf3f8cd08918b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
