export const name="cube-transparent-duotone";
export const id="dl_700e254ac2b94874a424";
export const url=new URL("../icons/cube-transparent-duotone.svg?v=3f58ffb4df1db2c2effb799a2e5e5d30d07882aeee423e63cfe62b352a97300f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
