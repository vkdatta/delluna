export const name="flight_class";
export const id="dl_af33ca619d5c746160e1";
export const url=new URL("../icons/flight_class.svg?v=207bff9269031164a6665fd3e4b11e1d6056ce1dfa60cff5ab24ca794c60c7d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
