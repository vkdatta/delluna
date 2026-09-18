export const name="qr_code_2-fill";
export const id="dl_91ec89ebbcc347618de8";
export const url=new URL("../icons/qr_code_2-fill.svg?v=f47af513f49578702d183828fe91d4074621ff887d06bd2a5cabdfc6221842ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
