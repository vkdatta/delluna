export const name="lucid_3-phone-forwarded";
export const id="dl_f5a2feca375147799c84";
export const url=new URL("../icons/lucid_3-phone-forwarded.svg?v=109a29a5d7f542a7efab406bc59a422a0ba71ee16fc705268db194d53ae5b15b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
