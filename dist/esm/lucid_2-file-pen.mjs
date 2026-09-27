export const name="lucid_2-file-pen";
export const id="dl_fa7c975587914e9fb1fb";
export const url=new URL("../icons/lucid_2-file-pen.svg?v=bf3121137f9dc906aa9897dac7a7263888e0fc60e2c121f9666ba8004006712a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
