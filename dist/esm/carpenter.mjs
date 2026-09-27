export const name="carpenter";
export const id="dl_7c75017132cca61d3a16";
export const url=new URL("../icons/carpenter.svg?v=37d7dde49b3e29618a237131ef9da34f8774316372a1a5278626da9589ac7cc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
