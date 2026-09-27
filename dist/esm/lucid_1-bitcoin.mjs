export const name="lucid_1-bitcoin";
export const id="dl_725fec57d0ed44d2a027";
export const url=new URL("../icons/lucid_1-bitcoin.svg?v=a47b95e601fb7a1f38669e97d50388a2afffbdb663203bfa159bf8f337caa172",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
