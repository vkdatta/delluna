export const name="gps-thin";
export const id="dl_5c89d0cda3074a62a58c";
export const url=new URL("../icons/gps-thin.svg?v=cb30793c5d75dc0234c9d6d208fe2d9e17f3388a42b1bc88405bdf810128c221",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
