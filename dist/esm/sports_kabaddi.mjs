export const name="sports_kabaddi";
export const id="dl_64ae1e5e5b5c48018720";
export const url=new URL("../icons/sports_kabaddi.svg?v=1e079c967c35e3aa497410eb252f89cdfd5ce8f144c24129c69a2961b21f07df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
