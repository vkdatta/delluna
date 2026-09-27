export const name="more_down-fill";
export const id="dl_5151439e28ad64ed6ffa";
export const url=new URL("../icons/more_down-fill.svg?v=c5a8e132363ec47aee7be2893705bab8f05ba08e3baa9ec4536a4c677999b590",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
