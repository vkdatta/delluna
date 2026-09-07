export const name="device-mobile-thin";
export const id="dl_111f1ca75e1343e1a40d";
export const url=new URL("../icons/device-mobile-thin.svg?v=3e01d57b4e5dcc6aee7fbc6af6253121df3625154a4fa71cea2e7492bb19cae2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
