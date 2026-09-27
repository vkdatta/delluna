export const name="lucid_2-galaxy";
export const id="dl_af5a969136fd414d9929";
export const url=new URL("../icons/lucid_2-galaxy.svg?v=df5f8c7e851cc698de7e337e3751531509274adc3a54cc00cc100528a43cf6c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
