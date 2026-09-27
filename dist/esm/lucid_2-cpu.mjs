export const name="lucid_2-cpu";
export const id="dl_07aa3b21f382499db359";
export const url=new URL("../icons/lucid_2-cpu.svg?v=0d6811a089be41e196a28e3339753080351fb69ce259ad5ee915db3025922d62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
