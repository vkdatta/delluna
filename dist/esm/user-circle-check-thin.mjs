export const name="user-circle-check-thin";
export const id="dl_d4e1a7c5b150f97f2942";
export const url=new URL("../icons/user-circle-check-thin.svg?v=dbd745ac756eff51be4d4c081cb0f7a0b2c4094149f6093ef63d0ae1b5f85aa1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
