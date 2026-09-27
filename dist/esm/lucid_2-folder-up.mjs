export const name="lucid_2-folder-up";
export const id="dl_4eb426104ee64160a087";
export const url=new URL("../icons/lucid_2-folder-up.svg?v=fa47ca2f0538a5f5caa28213c77b25d680f5ec909f20f484d838983b53dbf262",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
