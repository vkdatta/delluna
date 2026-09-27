export const name="format_quote_off";
export const id="dl_7bde901b78a14e0e4f69";
export const url=new URL("../icons/format_quote_off.svg?v=2c0e2e17922bb635eca90f1e6c048692b86adf1d821af165c180ff5667da3a2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
