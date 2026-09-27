export const name="lucid_1-bone-fracture";
export const id="dl_5bfeea168fca42c1a777";
export const url=new URL("../icons/lucid_1-bone-fracture.svg?v=2f89459e00c930d35ec05e4cff39fc0e0315f9aea1a7f65fdbf76f5e480b703e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
