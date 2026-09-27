export const name="lucid_3-smartphone";
export const id="dl_fddf5fdb7f9b4a028330";
export const url=new URL("../icons/lucid_3-smartphone.svg?v=7a9a82662b2d03d033316c3772fed3f64e8ea26b5458efeac2616adce567ca56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
