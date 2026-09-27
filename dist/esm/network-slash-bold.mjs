export const name="network-slash-bold";
export const id="dl_5e5c123d41e448aa9514";
export const url=new URL("../icons/network-slash-bold.svg?v=e4bf1c614380097886a4a5c67969e186a4e49565d424c6cbd9792ddd1d5c95f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
