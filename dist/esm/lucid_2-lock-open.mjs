export const name="lucid_2-lock-open";
export const id="dl_43cf258b931d430694e8";
export const url=new URL("../icons/lucid_2-lock-open.svg?v=81f7596ba8f375ba115be44c29c28647e804f1a05800b94b39d670881b64bf2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
