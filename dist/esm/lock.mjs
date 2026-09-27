export const name="lock";
export const id="dl_4dc7d563bc23bb4d8965";
export const url=new URL("../icons/lock.svg?v=c3e9ec21d0098842d217c2d55b7f28e585f7816db325194c01e46ca822b36ca5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
