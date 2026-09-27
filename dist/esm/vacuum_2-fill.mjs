export const name="vacuum_2-fill";
export const id="dl_9e61d238cb9e3c22d3b8";
export const url=new URL("../icons/vacuum_2-fill.svg?v=08843a0edefe6a70ed3205c2e22c1defa5b00e580f870b813a5f9703a0896dec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
