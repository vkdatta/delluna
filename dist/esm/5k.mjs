export const name="5k";
export const id="dl_f73cdebc12862fbba8ea";
export const url=new URL("../icons/5k.svg?v=4c7a3f609b200cdc8441350dd83f78c02d3371c11c701d11f4d87fe5a9a54b62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
