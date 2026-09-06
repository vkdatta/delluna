export const name="lucid_3-panda";
export const id="dl_2a9d628d245b4e41ab91";
export const url=new URL("../icons/lucid_3-panda.svg?v=626fcc03e236f72a7cfbbe156ad6161dfeb7ccc2b01b131ab6e748072118e81f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
