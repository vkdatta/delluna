export const name="lucid_1-arrow-big-right-dash";
export const id="dl_eae131305fdd4d4e9a23";
export const url=new URL("../icons/lucid_1-arrow-big-right-dash.svg?v=5b24ca2c3fe552e53dd93b85fd7792c18abc6db775986baa50e4f7432ca3faf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
