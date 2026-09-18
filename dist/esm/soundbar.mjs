export const name="soundbar";
export const id="dl_500587966ce741ccbc7f";
export const url=new URL("../icons/S/soundbar.svg?v=3cc615e7185a3521da478a4a32293c84e2ec6de5765587cbd7202b9aaf7d06f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
