export const name="rectangle-bold";
export const id="dl_7618ea2c9cef4dcb971d";
export const url=new URL("../icons/rectangle-bold.svg?v=a237851daec35e19ebbc891343adca72a0fac3751cfd48d27eb110e734f5b3af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
