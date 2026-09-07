export const name="dev-to-logo-bold";
export const id="dl_458a009888164903a71b";
export const url=new URL("../icons/dev-to-logo-bold.svg?v=5edc1bb6c2a152274200b942955e5e931172d9af56b8897614a31eb9c756a47e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
