export const name="chess_knight";
export const id="dl_019890f52d8c5183ff9e";
export const url=new URL("../icons/chess_knight.svg?v=01ab53b45308664860fa9850ecaf2affba76b03e55577e3855e9298ee82399ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
