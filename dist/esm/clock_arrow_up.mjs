export const name="clock_arrow_up";
export const id="dl_abb406856a2edf4a5b5e";
export const url=new URL("../icons/clock_arrow_up.svg?v=e87dc35cff161e6e311be94eec083a500c78882b391ffe356ee4b7549acc3c55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
