export const name="martini";
export const id="dl_2d762840a4c54285b79f";
export const url=new URL("../icons/martini.svg?v=18646c30a03c5df7aeb9299bb8cff526af91c9eba5b37333789f5e5952f01460",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
