export const name="grid-nine-thin";
export const id="dl_f1a44169ba39469aaf43";
export const url=new URL("../icons/grid-nine-thin.svg?v=72384a21a963fe258989b669b7e0c451e327190e204c478bfa9c10ca8318ecf3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
