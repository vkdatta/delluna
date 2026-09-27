export const name="upload-bold";
export const id="dl_2108c8961a16f01865ca";
export const url=new URL("../icons/upload-bold.svg?v=75953e2bc82da8fd554eca2cdb14ff82c8bdd46f627dc11956fd2cca0ccb15dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
