export const name="tatami_seat-fill";
export const id="dl_891d7e47edf25d051247";
export const url=new URL("../icons/tatami_seat-fill.svg?v=27204388e22b2383a7798e7faec8fd8cd6bbb6f2b14749949016b1870217515a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
