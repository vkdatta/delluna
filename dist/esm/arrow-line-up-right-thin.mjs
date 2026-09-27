export const name="arrow-line-up-right-thin";
export const id="dl_a40a9c4618344ba988cc";
export const url=new URL("../icons/arrow-line-up-right-thin.svg?v=19386ad2a9fc20b386ac3c3bc5101f1c89c8ffa22e2cbbc2d75db542919098f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
