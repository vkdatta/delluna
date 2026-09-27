export const name="lucid_1-balloon";
export const id="dl_732cddce2cba4b349aeb";
export const url=new URL("../icons/lucid_1-balloon.svg?v=87e5e0a5743cf62f999d88836fc06ed86c65494ddea0c006aba1c7a6a2ac6edb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
