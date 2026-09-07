export const name="plug-fill";
export const id="dl_afa861afa1214aa1a5cf";
export const url=new URL("../icons/plug-fill.svg?v=b829d148f18ad4cd80776b5a46d04d5cf11a4bbac5a40b96eb978798dd1ecfa6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
