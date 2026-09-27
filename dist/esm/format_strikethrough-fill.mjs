export const name="format_strikethrough-fill";
export const id="dl_6ff45b4877f319b0b4e5";
export const url=new URL("../icons/format_strikethrough-fill.svg?v=daf83bc66617cbad26b81bd49352e3f3272ddea917461f363a5b584c4538efd2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
