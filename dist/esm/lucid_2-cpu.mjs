export const name="lucid_2-cpu";
export const id="dl_07aa3b21f382499db359";
export const url=new URL("../icons/lucid_2-cpu.svg?v=4f3ec02d9dbf5bec9d1e01387316ca062df66042b840a0e7c7cc77b3bd65560f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
