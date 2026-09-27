export const name="bluetooth-x-thin";
export const id="dl_5178c2c4b9c94d5f9239";
export const url=new URL("../icons/bluetooth-x-thin.svg?v=b446270846ffebb19bef5154eac8d47f0ae0bd0b3a51f81f2a416f71a86ea6d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
