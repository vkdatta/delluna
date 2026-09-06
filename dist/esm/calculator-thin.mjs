export const name="calculator-thin";
export const id="dl_9c9cbc822ddf42718485";
export const url=new URL("../icons/calculator-thin.svg?v=f8a760c4af34c4ce00f1a65c49ad618b61d9bc7c78839f2eeae80f8283c7664e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
