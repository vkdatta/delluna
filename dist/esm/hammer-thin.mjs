export const name="hammer-thin";
export const id="dl_fe72af643aea47e3875e";
export const url=new URL("../icons/hammer-thin.svg?v=db4342452e28a3d35b6ddfe0ec2ee8ed35fb68ac85c71692af34d0482dda6797",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
