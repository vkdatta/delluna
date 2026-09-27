export const name="lucid_2-eye";
export const id="dl_77f70c206c6a472e80a5";
export const url=new URL("../icons/lucid_2-eye.svg?v=78d7cf310cd31e2cbc24d9a640cf29537c9ebd6bec7262301aa7a14855d03429",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
