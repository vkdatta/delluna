export const name="shield-thin";
export const id="dl_b591d701c16a486a9d9f";
export const url=new URL("../icons/S/shield-thin.svg?v=16086eac2c16beff4155e2859e4409331e1682d8b6d6fe38c296ad1f3e027484",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
