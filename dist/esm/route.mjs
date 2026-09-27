export const name="route";
export const id="dl_4426a0e417c8fe89c998";
export const url=new URL("../icons/route.svg?v=9e4eeb83a4e91c5fe0b389d763d05d3c77a116e34919d02f50e42d625a52b87f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
