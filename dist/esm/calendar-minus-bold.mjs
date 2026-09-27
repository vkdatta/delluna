export const name="calendar-minus-bold";
export const id="dl_39afadb26b6c4300baa4";
export const url=new URL("../icons/calendar-minus-bold.svg?v=6ca74ce48ef0530dfdc0645fb4433285ef0b5302479243ff37e4c0ba4cb6bbc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
