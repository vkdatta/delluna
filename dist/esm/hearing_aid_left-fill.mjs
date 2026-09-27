export const name="hearing_aid_left-fill";
export const id="dl_695127b3c80c5065105f";
export const url=new URL("../icons/hearing_aid_left-fill.svg?v=68e19455aef9c5d6e2dababd8ebfd6a41729703b6ca4f970f0f1bc456b92a79f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
