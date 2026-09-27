export const name="lucid_2-fishing-hook";
export const id="dl_c2236589e57f4facb013";
export const url=new URL("../icons/lucid_2-fishing-hook.svg?v=2ce0645ca52be1d97bf2cca603555668b424881401389024a1ff315b6bc8fe28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
