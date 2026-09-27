export const name="caret-line-right-thin";
export const id="dl_90f750122ddf4278a4e1";
export const url=new URL("../icons/caret-line-right-thin.svg?v=232c7efa6d403f58a7deb8cca2f0ba43edfd53b36c413ebce9b08212493f3d7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
