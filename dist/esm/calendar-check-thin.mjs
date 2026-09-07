export const name="calendar-check-thin";
export const id="dl_e49f1fd1e42547bebe6b";
export const url=new URL("../icons/calendar-check-thin.svg?v=00a53aa1234f6608cab179cf72b030595e876626f34879ccf73dfced201396b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
