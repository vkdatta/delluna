export const name="moped-thin";
export const id="dl_964bfc3e304944719f77";
export const url=new URL("../icons/moped-thin.svg?v=d87e74059fce6c6d332fb5a055c9d18ea940e8ee23697f1812216286b1d6916d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
