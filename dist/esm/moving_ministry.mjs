export const name="moving_ministry";
export const id="dl_4ead4f543af5427d9b0a";
export const url=new URL("../icons/moving_ministry.svg?v=c02db4c75bd66005d670e53abe19e7bd818edf4b664443e9eee214133f2f0a1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
