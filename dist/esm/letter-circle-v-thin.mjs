export const name="letter-circle-v-thin";
export const id="dl_437da8fd00f1491caa5c";
export const url=new URL("../icons/letter-circle-v-thin.svg?v=c35c892d8a080e6266fc4a67b127f5341351ed6fb680c4d345ae52e9aaf9a681",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
