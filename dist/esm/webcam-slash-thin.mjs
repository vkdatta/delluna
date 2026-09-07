export const name="webcam-slash-thin";
export const id="dl_db5bbba28d974e02aa5e";
export const url=new URL("../icons/W/webcam-slash-thin.svg?v=a5b7012e0e4aaccb107c1a741aa5090b01d21a4402b13085cae0e2ef1f4ed0c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
