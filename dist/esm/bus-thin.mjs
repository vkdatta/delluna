export const name="bus-thin";
export const id="dl_2558ac40921645a8bfc5";
export const url=new URL("../icons/bus-thin.svg?v=b40df80c6a9c107bd7140ddf323329bb4cda26dd0b98c40b689d7358c6dd255f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
