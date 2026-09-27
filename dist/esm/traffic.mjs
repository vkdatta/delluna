export const name="traffic";
export const id="dl_d8143faa5cd3c6033e46";
export const url=new URL("../icons/traffic.svg?v=dcca29cef7b80bda0afe6f646e8ed8767803f062c3ba4fc11e4f0425a04e3a68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
