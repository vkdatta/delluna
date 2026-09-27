export const name="lucid_2-lamp-wall-up";
export const id="dl_0b2a0c555f15485c9a0d";
export const url=new URL("../icons/lucid_2-lamp-wall-up.svg?v=c95b61fa2a9736661ec16d46bde25c1dd498db137dc8406e45a7577bdaa76bb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
