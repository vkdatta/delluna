export const name="game_stick_left";
export const id="dl_4a183eb410ec2e040b72";
export const url=new URL("../icons/game_stick_left.svg?v=27629468aac29ce459ac4bb1b3899f148f31357a6020a9174cd58316c79500b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
