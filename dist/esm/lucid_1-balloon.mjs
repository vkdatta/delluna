export const name="lucid_1-balloon";
export const id="dl_732cddce2cba4b349aeb";
export const url=new URL("../icons/lucid_1-balloon.svg?v=b22174b1c4b5a65e303f2b2ef34bc9343e3e19c67d30793ae3ba4875f9c14c75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
