export const name="cloud-warning-thin";
export const id="dl_ba3394a3a76e42f4af4e";
export const url=new URL("../icons/cloud-warning-thin.svg?v=366ec0c22efd64295d246981f88cb1e019d25410bec7d4c431585d6b356bdee5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
