export const name="split-horizontal-duotone";
export const id="dl_327433c558f2888c9968";
export const url=new URL("../icons/split-horizontal-duotone.svg?v=a3645b9864a140f79a0ef575b5cba049ed000cf8f44952846b3341ead49ca1da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
