export const name="timer_pause";
export const id="dl_abf4ccce6c693f5ef2a6";
export const url=new URL("../icons/timer_pause.svg?v=ea006bddb4d2af84be3cd3a07736c7341a5d54e1fd2cc183edba739b4478fadc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
