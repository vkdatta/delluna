export const name="user-gear-thin";
export const id="dl_720d52f5af6f5f63f35f";
export const url=new URL("../icons/user-gear-thin.svg?v=490d1a5128686e1da83ff157b5f3c0e80988620de023b74fbb5e406f9006603b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
