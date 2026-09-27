export const name="speaker-simple-x-bold";
export const id="dl_820212529ced3ce31fba";
export const url=new URL("../icons/speaker-simple-x-bold.svg?v=d41f63df97591550e126076d2467b9dc413d66dbbd18bc5a213ea2369d155b8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
