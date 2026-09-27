export const name="lucid_3-rows-2";
export const id="dl_78cdb11404b34bd3b058";
export const url=new URL("../icons/lucid_3-rows-2.svg?v=8a28d299b5c2f5ed9de24f0d2de7e2fdea0301316ef926e88d56c6402a94e2f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
