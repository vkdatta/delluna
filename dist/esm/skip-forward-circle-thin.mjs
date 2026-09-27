export const name="skip-forward-circle-thin";
export const id="dl_15962c310f145d0b0354";
export const url=new URL("../icons/skip-forward-circle-thin.svg?v=150e172630a10c02ec523f5f6c4f2a185b1323fdd4d11cd5496ceca04e014838",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
