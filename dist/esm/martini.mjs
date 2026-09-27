export const name="martini";
export const id="dl_2d762840a4c54285b79f";
export const url=new URL("../icons/martini.svg?v=fba21db54d9ab4f74086711438a480dc1a3db88d66c847b3500dcab142aaa40a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
