export const name="farsight_digital";
export const id="dl_56879a9a9747bfb00919";
export const url=new URL("../icons/farsight_digital.svg?v=5b89b6ccc16c88c578c39e79f86302f53484cd247cceb04c897cc77db395e36f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
