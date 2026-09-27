export const name="letter-circle-v-thin";
export const id="dl_437da8fd00f1491caa5c";
export const url=new URL("../icons/letter-circle-v-thin.svg?v=f032ccd748c6a6a93e651bd693439b5c7827226a3c02ca771eaf79895b79d0cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
