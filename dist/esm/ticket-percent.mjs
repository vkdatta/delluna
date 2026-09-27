export const name="ticket-percent";
export const id="dl_00598cf03ae440fca640";
export const url=new URL("../icons/ticket-percent.svg?v=bfadc51dbcac582b819f2adca2604df8e801524193ae296834a8b6b6fd9ad224",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
