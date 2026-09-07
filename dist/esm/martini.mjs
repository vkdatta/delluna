export const name="martini";
export const id="dl_2d762840a4c54285b79f";
export const url=new URL("../icons/martini.svg?v=74374d445d13d1a2318673642c31a93005818fb36cc0d9a2835ea199331b3288",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
