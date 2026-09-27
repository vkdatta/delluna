export const name="arrow_forward_ios-fill";
export const id="dl_eec76ea709d08115b229";
export const url=new URL("../icons/arrow_forward_ios-fill.svg?v=67dafa3dd411899750daf02b9483e410d543c4872b5241cc18ac45ddb5b345c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
