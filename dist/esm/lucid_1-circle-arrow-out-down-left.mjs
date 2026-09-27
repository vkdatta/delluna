export const name="lucid_1-circle-arrow-out-down-left";
export const id="dl_5e3dd38a560a44adb441";
export const url=new URL("../icons/lucid_1-circle-arrow-out-down-left.svg?v=7aec459ae5dbb5f9dedfe5bbdfde848753eb20579fe2e5932ac1ab66bd8126cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
