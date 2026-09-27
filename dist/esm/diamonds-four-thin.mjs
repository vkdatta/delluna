export const name="diamonds-four-thin";
export const id="dl_3ea7d2eedc034c8e9f3d";
export const url=new URL("../icons/diamonds-four-thin.svg?v=697fe9c3bbb5d5d48077f87826ddaf953bcc8d7afce3f5d600a561df98585354",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
