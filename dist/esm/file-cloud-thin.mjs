export const name="file-cloud-thin";
export const id="dl_103b7478b4c34632b247";
export const url=new URL("../icons/file-cloud-thin.svg?v=0470145da76066500f4c8c4b1c9e184b6dc99bf524c15e70b0ae302e85928283",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
