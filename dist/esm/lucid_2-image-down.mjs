export const name="lucid_2-image-down";
export const id="dl_d89c27f8a7dd47638acb";
export const url=new URL("../icons/lucid_2-image-down.svg?v=45cb13a21b8c98b80c7f03cce2c19dc87615f9d119fd66c248aa90fd7d5f8337",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
