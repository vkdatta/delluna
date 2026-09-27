export const name="lucid_2-layer-arrow-up";
export const id="dl_129cd195f0c140b8acd9";
export const url=new URL("../icons/lucid_2-layer-arrow-up.svg?v=e739f695e46710a693dc82466453e6f45414330091b602b9b47d35f35acc5938",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
