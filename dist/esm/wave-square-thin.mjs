export const name="wave-square-thin";
export const id="dl_2ae9224a2a8941f862cb";
export const url=new URL("../icons/wave-square-thin.svg?v=62975d9866cf7e4dc56ad861b105957a916026aca559aa3cae074cc02620d412",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
