export const name="align-center-vertical-thin";
export const id="dl_3a2ad89180aa4095be17";
export const url=new URL("../icons/align-center-vertical-thin.svg?v=168e104eff6b15bd5992cb2e7353cb2465946813190dce0c998a56e9cef9e033",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
