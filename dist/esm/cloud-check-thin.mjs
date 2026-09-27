export const name="cloud-check-thin";
export const id="dl_9984ce274c8d416b99c8";
export const url=new URL("../icons/cloud-check-thin.svg?v=50466a37e32a906ec57169e50391053303b1d6d0237d70ca140b3940427aae55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
