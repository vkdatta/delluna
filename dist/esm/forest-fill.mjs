export const name="forest-fill";
export const id="dl_e59cc671fc6844d975d9";
export const url=new URL("../icons/forest-fill.svg?v=f6b60d5b11f5b8a994350ac5c38d250a4b61a6465ec2a922eb6295f8c049baf7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
