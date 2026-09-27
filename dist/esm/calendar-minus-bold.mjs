export const name="calendar-minus-bold";
export const id="dl_39afadb26b6c4300baa4";
export const url=new URL("../icons/calendar-minus-bold.svg?v=df307f9da09677314cdfe791c877aaa64b8ad29a139b0d5dd94ebfde97c61666",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
