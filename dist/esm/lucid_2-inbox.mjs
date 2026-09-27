export const name="lucid_2-inbox";
export const id="dl_8a60cd881e9b47b9a342";
export const url=new URL("../icons/lucid_2-inbox.svg?v=970e1cc3df5ce181049ab70b040f5082911fbfb602c2e7bc2eb532135db4074b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
