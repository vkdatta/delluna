export const name="eda";
export const id="dl_50897b3b43c1e4fc44fb";
export const url=new URL("../icons/eda.svg?v=9bd75455bceeb7a3144854f692ac8c318c83614e7ad13b531da985116f1768f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
