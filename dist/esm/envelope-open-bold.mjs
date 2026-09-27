export const name="envelope-open-bold";
export const id="dl_5863e68bb0874143a215";
export const url=new URL("../icons/envelope-open-bold.svg?v=a92132fefc79c6ac58c8d1b35ff67155c4d7417e805c80447dc4782a6784f227",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
