export const name="file-cloud-thin";
export const id="dl_103b7478b4c34632b247";
export const url=new URL("../icons/file-cloud-thin.svg?v=03f7e7360b01e34305a019bac93d348c52feb569e32ba9778d86006b6e575a85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
