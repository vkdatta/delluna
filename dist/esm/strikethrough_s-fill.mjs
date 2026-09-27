export const name="strikethrough_s-fill";
export const id="dl_b0d694dd0a2bc6dd6065";
export const url=new URL("../icons/strikethrough_s-fill.svg?v=fc30101833b9f04eaa0c0141a29c9d2c95e783a31792f6f7274b8e012349ac24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
