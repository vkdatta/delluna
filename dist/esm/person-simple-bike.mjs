export const name="person-simple-bike";
export const id="dl_50e8e4ed63534e9f9c90";
export const url=new URL("../icons/person-simple-bike.svg?v=6b007d74b975075acfec1a7bbc8c766577ade5e67cfdb63f8fce5d818edfea1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
