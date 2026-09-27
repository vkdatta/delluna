export const name="gps-thin";
export const id="dl_5c89d0cda3074a62a58c";
export const url=new URL("../icons/gps-thin.svg?v=c1dc60c291673c807a772382c97b4f681826bc2804cc96c170d6772327c77991",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
