export const name="align-left-simple-bold";
export const id="dl_569008a6dead4edeaee7";
export const url=new URL("../icons/align-left-simple-bold.svg?v=1498b9463612b45d669775704e6842c54a09b143e1ca0ace7d8c6ce7a1c1c669",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
