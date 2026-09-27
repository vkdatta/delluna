export const name="warning-diamond-fill";
export const id="dl_43ecf0f829df2a0cdcc0";
export const url=new URL("../icons/warning-diamond-fill.svg?v=53fcf3b68391aed5e47a761dd586b83f52e85ec6eb6589b2daf869d78ac10451",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
