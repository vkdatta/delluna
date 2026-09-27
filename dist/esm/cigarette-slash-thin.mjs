export const name="cigarette-slash-thin";
export const id="dl_bd195cef86cc4cefaef4";
export const url=new URL("../icons/cigarette-slash-thin.svg?v=0050069da3a4f11f8030bca38fe0ba76d61d7827bd4b8828f36bc3ba878012e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
