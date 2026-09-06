export const name="arrow-elbow-left-up-thin";
export const id="dl_12a3106582bd45e0893a";
export const url=new URL("../icons/arrow-elbow-left-up-thin.svg?v=644df3e4889869834865b8f88a1052207e67461835f51a06173eeeb76abf73a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
