export const name="bicycle-thin";
export const id="dl_3ac5be9d004b4a9ca10a";
export const url=new URL("../icons/bicycle-thin.svg?v=661c14a691e7a149a2b5d3164192188d55b8d994949f19daf5bc076cb9bbfcb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
