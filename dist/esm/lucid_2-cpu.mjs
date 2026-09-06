export const name="lucid_2-cpu";
export const id="dl_07aa3b21f382499db359";
export const url=new URL("../icons/lucid_2-cpu.svg?v=4447d3dde0858da1a440241a37060fe34776113218f802517b4b054c36c2ab6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
