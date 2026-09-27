export const name="lucid_1-circle-percent";
export const id="dl_21e444aaf07a4b5cbec2";
export const url=new URL("../icons/lucid_1-circle-percent.svg?v=f02ce41c1646f5896bd2a1505baf5d707ca866efa065e42e194cce843b2a4a61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
