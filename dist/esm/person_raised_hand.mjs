export const name="person_raised_hand";
export const id="dl_adb40c3a0f4bac5b08a8";
export const url=new URL("../icons/person_raised_hand.svg?v=4f2221b2731fbf8d5ddd69b3dfe2c8bb088d2e82f43cab25d52002b7a96bd8d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
