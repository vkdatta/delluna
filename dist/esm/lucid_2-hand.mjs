export const name="lucid_2-hand";
export const id="dl_d8786d434bfb44738eea";
export const url=new URL("../icons/lucid_2-hand.svg?v=ec0cf47fd84e16015a4a5fc95353c2ad0e80d32b714ad51955f5b0ddcdcfd11b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
