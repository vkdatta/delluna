export const name="lucid_3-radio";
export const id="dl_a642c989a50b414da657";
export const url=new URL("../icons/lucid_3-radio.svg?v=e5b75178d676886ffce8b818fbb644e88878685e9f1acf543265ca55683f0b09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
