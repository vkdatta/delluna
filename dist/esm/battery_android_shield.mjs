export const name="battery_android_shield";
export const id="dl_30471b5caf5f083cf798";
export const url=new URL("../icons/battery_android_shield.svg?v=714114a5be4aee2eba0f9520abfacc3555f93eb6161336c4af5fcc1f530ae337",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
