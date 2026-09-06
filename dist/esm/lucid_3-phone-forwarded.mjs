export const name="lucid_3-phone-forwarded";
export const id="dl_f5a2feca375147799c84";
export const url=new URL("../icons/lucid_3-phone-forwarded.svg?v=faa7e3023185f02de20d3f82f797d4a2623ab8a9bd0e7b93953f5b1c99b9bdc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
