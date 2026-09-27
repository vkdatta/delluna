export const name="serif-fill";
export const id="dl_e829d7c2d85b963c12d4";
export const url=new URL("../icons/serif-fill.svg?v=02f7c41dff4438bc08fe63ece6543de94d376d0691d4fbb17a95f340d205dc9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
