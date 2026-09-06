export const name="corners-out-bold";
export const id="dl_ad21b3ce2b8b470aa543";
export const url=new URL("../icons/corners-out-bold.svg?v=df74ba3c2a496a344f98e80c0782f43aa3760ed4b8b6103a4c621bfc59575e16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
