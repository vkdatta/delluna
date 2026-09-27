export const name="memory";
export const id="dl_355928756318cdfcdd60";
export const url=new URL("../icons/memory.svg?v=82674423325cd6416007f16b088b18e23dce0f2223a2b230b6a51fa3916cdca5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
