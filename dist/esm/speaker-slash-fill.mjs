export const name="speaker-slash-fill";
export const id="dl_c68b289d29634faca938";
export const url=new URL("../icons/S/speaker-slash-fill.svg?v=029fae09171e356142aef7db03006e84e6bd1534960e2f9cc4a2b73e8325004c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
