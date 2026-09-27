export const name="calendar-check-thin";
export const id="dl_e49f1fd1e42547bebe6b";
export const url=new URL("../icons/calendar-check-thin.svg?v=aae2876e03d70aad608c6eed9d9df838ce1b8b00338d0dcba14cfd43bac48143",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
