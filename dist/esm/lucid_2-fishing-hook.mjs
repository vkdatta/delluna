export const name="lucid_2-fishing-hook";
export const id="dl_c2236589e57f4facb013";
export const url=new URL("../icons/lucid_2-fishing-hook.svg?v=91b8c8bf6cd75eac1fb0781c1ec9c4e1c86a16749fd196f4672688b3b66805ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
