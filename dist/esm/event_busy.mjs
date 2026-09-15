export const name="event_busy";
export const id="dl_2cde6597a6494c68bd6e";
export const url=new URL("../icons/E/event_busy.svg?v=56aeb9dd38b03e55d50b6b8575a4d6f12b7a8113dfa9357f68cae330638e856a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
