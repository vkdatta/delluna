export const name="lucid_1-clock-arrow-left";
export const id="dl_5b33ccf38ced4bb7becd";
export const url=new URL("../icons/lucid_1-clock-arrow-left.svg?v=9e273ddfd69e5b0c2b5cad3e4822c559269b4f65c6d3c1ff3fbd11d7e9a77220",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
