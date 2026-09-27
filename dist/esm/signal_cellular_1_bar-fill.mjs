export const name="signal_cellular_1_bar-fill";
export const id="dl_17968f60a681a067fe5a";
export const url=new URL("../icons/signal_cellular_1_bar-fill.svg?v=a1c5629607a9ebaa32f89a148c70024eb20d96b713323cf892a8092e411e8578",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
