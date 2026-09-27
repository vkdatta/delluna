export const name="square-pause";
export const id="dl_5a8bc502856c4bbfb02c";
export const url=new URL("../icons/square-pause.svg?v=c4399ad04298bb163ef0acb0ad7706b70b2efcd0dbf75b89c554cec0ef09e424",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
