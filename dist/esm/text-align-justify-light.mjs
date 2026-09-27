export const name="text-align-justify-light";
export const id="dl_ce978290e5c415fcedaf";
export const url=new URL("../icons/text-align-justify-light.svg?v=501e7235a888ca63a82ba565ece4dffc7432fe03fe44429e0076b4fede4cb1db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
