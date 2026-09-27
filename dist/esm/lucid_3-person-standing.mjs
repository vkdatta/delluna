export const name="lucid_3-person-standing";
export const id="dl_aeede8789c2b47038369";
export const url=new URL("../icons/lucid_3-person-standing.svg?v=f6071bd00d6cbf208a6894e0455370d076ec3e5621dfa7b3b1ae0fe43b61cba5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
