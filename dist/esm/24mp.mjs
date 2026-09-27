export const name="24mp";
export const id="dl_c26ba98ee236e6ac484d";
export const url=new URL("../icons/24mp.svg?v=431224adbe38afd0ea60d3472f8171312b53c14c8c26aa314aee49d7ea5f676f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
