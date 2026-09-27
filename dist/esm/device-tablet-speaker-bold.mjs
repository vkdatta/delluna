export const name="device-tablet-speaker-bold";
export const id="dl_c4a83b2c9f2c4cc1bcc0";
export const url=new URL("../icons/device-tablet-speaker-bold.svg?v=785ab5801509850a6796b86462ba82079a15065c5bfa90b58e9fb15c66f6c0f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
