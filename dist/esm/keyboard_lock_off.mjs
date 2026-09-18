export const name="keyboard_lock_off";
export const id="dl_960246a5b9044b789699";
export const url=new URL("../icons/K/keyboard_lock_off.svg?v=92dbb1e039007067f2c7e04aa510e0233d4b095e9feddc4557a3a69d52bec7c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
