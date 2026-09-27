export const name="lucid_1-clipboard-x";
export const id="dl_bb1ba7776fca4d4198a1";
export const url=new URL("../icons/lucid_1-clipboard-x.svg?v=f9e77891f09d15b1c0627c16178f7ee4f884a96519f2158d50ff490928ba9ce2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
