export const name="list-bullets-thin";
export const id="dl_659b815808d5414388f0";
export const url=new URL("../icons/list-bullets-thin.svg?v=a29d1b259b2b27c9424374874abbcc2fb113b53788d3b6d22e1ee0bba4c1309d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
