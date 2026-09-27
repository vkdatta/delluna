export const name="pen-nib-straight-thin";
export const id="dl_9ec3a4f524874d9285f4";
export const url=new URL("../icons/pen-nib-straight-thin.svg?v=10495243cbe6d12d680c9bd915bef4459524f8ef48266111926446ba6b8804c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
