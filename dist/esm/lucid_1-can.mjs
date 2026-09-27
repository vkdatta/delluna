export const name="lucid_1-can";
export const id="dl_58a6a3e6f44b4c75b9eb";
export const url=new URL("../icons/lucid_1-can.svg?v=b5a19196e1db4ecfc54d96ec7a899b59a422afde2c7a83b4011ee24a77d58071",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
