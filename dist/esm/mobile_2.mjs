export const name="mobile_2";
export const id="dl_1484f6bab84746a2a0d8";
export const url=new URL("../icons/M/mobile_2.svg?v=348599d001f842dd707f459da91e36c4b4a20fe4e6c97e582c5ada4ba07a0c69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
