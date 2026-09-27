export const name="bell-simple-slash";
export const id="dl_08e09f0b9b904585bea4";
export const url=new URL("../icons/bell-simple-slash.svg?v=f8805b73fdf088b32639728f2448f23c759fcacd5651aa5bd02df144cd5ee22c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
