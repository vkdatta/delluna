export const name="microsoft-teams-logo-thin";
export const id="dl_065be7538ba943a7b035";
export const url=new URL("../icons/microsoft-teams-logo-thin.svg?v=329291d69593d1d38f48e845eb4698018f0951cb88648246f6bf67c4fc2cbcd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
