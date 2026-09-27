export const name="snail";
export const id="dl_1ee3e502bb18c4861711";
export const url=new URL("../icons/snail.svg?v=f333172d7542cca0294f046969be60fb79459a6790b0e7e8d46afd6f6eea10ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
