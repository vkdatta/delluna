export const name="not-subset-of-thin";
export const id="dl_de2bf1c7aee94f80bab1";
export const url=new URL("../icons/not-subset-of-thin.svg?v=db037040f698b13ac6b505d386dba5d363d82dfb2ab826f1a568d179418f79bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
