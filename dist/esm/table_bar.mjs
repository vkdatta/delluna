export const name="table_bar";
export const id="dl_c93e5fd3f0f20a734c75";
export const url=new URL("../icons/table_bar.svg?v=5ed1bc2420049eb003635317ec30c5e58eac4c335072422f4db626048b59519f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
