export const name="toilet-paper-thin";
export const id="dl_ce800854a1ed707d423c";
export const url=new URL("../icons/toilet-paper-thin.svg?v=ec9da81614bf35cf7b973c38a51df1ab319c09ae24a32c3947e0e3a5bae3c423",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
