export const name="emoticon-fill";
export const id="dl_e00a288bb9631797fc06";
export const url=new URL("../icons/emoticon-fill.svg?v=6bb94e2e53e9c5f7bdc4747138028dc94257a8a2fc27304a38041e077faf22dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
