export const name="event";
export const id="dl_9e80cbd7fff8c965ee45";
export const url=new URL("../icons/event.svg?v=393b6e0acd9f1003ee5f9bfb4c3543dd2c63fc74485d80a4fd02799cec3cb387",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
