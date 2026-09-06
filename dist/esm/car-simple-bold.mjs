export const name="car-simple-bold";
export const id="dl_21e08d64f93043f39ef0";
export const url=new URL("../icons/car-simple-bold.svg?v=f6e3368b6285a14faea5b8bb4ce805c3a27853512d58043b29f24d20a0b9f022",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
