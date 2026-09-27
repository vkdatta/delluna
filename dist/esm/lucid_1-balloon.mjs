export const name="lucid_1-balloon";
export const id="dl_732cddce2cba4b349aeb";
export const url=new URL("../icons/lucid_1-balloon.svg?v=875ffe4f6c0a24abc441dfd458e4b95a668967dbd86f3a56cc85af2e8810ea2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
