export const name="event_available";
export const id="dl_da3a4382905dd5b4ee94";
export const url=new URL("../icons/event_available.svg?v=badb8654b6e73ff33b113b5d6a883f0d5a65fb208656a3689c0585ba6d3e557e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
