export const name="lucid_1-circle-play";
export const id="dl_c129d1df63ac41b99df1";
export const url=new URL("../icons/lucid_1-circle-play.svg?v=10ceda7d2a359bcfc0239378ad670ca52c5361256116e8ed79092d4791e22f28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
