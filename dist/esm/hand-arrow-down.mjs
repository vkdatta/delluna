export const name="hand-arrow-down";
export const id="dl_d27b09f3a27d408f8f55";
export const url=new URL("../icons/hand-arrow-down.svg?v=6f051b588c9ebd57c70d489281e85060450621bd5f9cec093239df532c7f377f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
