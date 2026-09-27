export const name="settings_bluetooth-fill";
export const id="dl_1583c63b73d98f9e57da";
export const url=new URL("../icons/settings_bluetooth-fill.svg?v=dfea5d6a96ea9c9afbce705af8487d7f6d22471925812cc8ddf8c9f1e5390be7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
