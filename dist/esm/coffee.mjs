export const name="coffee";
export const id="dl_cd573d274d93458f9ed2";
export const url=new URL("../icons/coffee.svg?v=ab6b37d404d28daf49ba6296aa3c241e457485d489895219d9c681218da7d78f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
