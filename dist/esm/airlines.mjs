export const name="airlines";
export const id="dl_7202d91e8036dacfe51b";
export const url=new URL("../icons/airlines.svg?v=17db11f3cef7b6f78e8ad8b1de5956afd0cd0c1790c15a2d7553b5078975f6f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
