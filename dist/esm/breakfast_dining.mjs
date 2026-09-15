export const name="breakfast_dining";
export const id="dl_3d4c174d15434c9fbc17";
export const url=new URL("../icons/B/breakfast_dining.svg?v=16d19952e736652c9860fd8f6bc5180efabe2bc51f0b14965963be484b7b8051",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
