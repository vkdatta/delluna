export const name="graphics-card-thin";
export const id="dl_07daf49b09584738bc83";
export const url=new URL("../icons/graphics-card-thin.svg?v=653e6233af12ab29d2001aef3f2a79ae4c8e8c92e688eb3c7b44c3bb09216745",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
