export const name="text-align-left-light";
export const id="dl_973e30af734d1d5c6672";
export const url=new URL("../icons/text-align-left-light.svg?v=a8e86e75def1c999959aa3bb49fa08d56923ea961056eb05b5ba2533a7af2211",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
