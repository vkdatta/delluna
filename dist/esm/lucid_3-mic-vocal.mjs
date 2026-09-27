export const name="lucid_3-mic-vocal";
export const id="dl_4468c680e4d646b38859";
export const url=new URL("../icons/lucid_3-mic-vocal.svg?v=ddafc45e86bdca7c024f8541120ea3bc344ede4a7ca6a2c359c59f11d56c779b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
