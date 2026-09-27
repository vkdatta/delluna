export const name="person-simple-ski-light";
export const id="dl_34c0603d90824d02af77";
export const url=new URL("../icons/person-simple-ski-light.svg?v=65f6cefb8c3cc89dbd32c68f291cbbf21cb03a36f7af0ac9c5d8336d1b1a7583",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
