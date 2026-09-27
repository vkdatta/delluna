export const name="list-dashes-thin";
export const id="dl_2dc5df2c96234f898e01";
export const url=new URL("../icons/list-dashes-thin.svg?v=e153763d017fb15e3ed5dd0cb03cb5de653771e035e2e2447ec2fa6c1706f493",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
