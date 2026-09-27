export const name="19mp";
export const id="dl_ad3396da05de4a15a554";
export const url=new URL("../icons/19mp.svg?v=0b87f3f1ae36f83d9bee4b7ed0d5c2c42d333b5a64e2b19adf3fdcdb88e54a02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
