export const name="lucid_1-beef";
export const id="dl_163f5b41330a4681a94a";
export const url=new URL("../icons/lucid_1-beef.svg?v=3e733826653cbc2f96b2b1b925615b2eafc4b438db16d57aa3c08619d0960bb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
