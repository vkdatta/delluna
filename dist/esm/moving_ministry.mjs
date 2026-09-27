export const name="moving_ministry";
export const id="dl_54ff75788712d04d4869";
export const url=new URL("../icons/moving_ministry.svg?v=40d91959621364c0658abee29831768a5309a4e759362f05ef1a7c66f4131fd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
