export const name="crown-simple-thin";
export const id="dl_cc0b143961864753bbf3";
export const url=new URL("../icons/crown-simple-thin.svg?v=35fb1cd6018bbfea971f8cb5b8c9b2fa3f150875427c37abd0e90112dff7a12c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
