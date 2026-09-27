export const name="fiber_pin";
export const id="dl_a64c54780727c609af62";
export const url=new URL("../icons/fiber_pin.svg?v=cf62616358a5bffdb7812cccd287c779aee15d4c980b4df66cb9fbcb52189878",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
