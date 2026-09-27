export const name="phone_enabled";
export const id="dl_74aa1030a6496abade38";
export const url=new URL("../icons/phone_enabled.svg?v=84f5abe04cdea957909d03a1f6c9c7deb27af6430b95e47275e19c4fd8169de2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
