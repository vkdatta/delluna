export const name="selection-all-duotone";
export const id="dl_6a3e75bc4ddab7cacc6a";
export const url=new URL("../icons/selection-all-duotone.svg?v=59d4a1565478b504e98fe744104b13260b4dfa82babab49e20519d59e4d8109c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
