export const name="lucid_2-file-input";
export const id="dl_a07820a6ec3947cf9838";
export const url=new URL("../icons/lucid_2-file-input.svg?v=b797de10e06477f1439f6613d46f13c3ef782d193de73d20b2e7c2b1bccc305f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
