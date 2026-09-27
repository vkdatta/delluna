export const name="alarm_off";
export const id="dl_5c868ce75bea6e4d9a12";
export const url=new URL("../icons/alarm_off.svg?v=29892c5fb5815b1d0ce8a4a6f9a654633def98ac44dc7b40c23c4ec5ded578aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
