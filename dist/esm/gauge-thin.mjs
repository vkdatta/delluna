export const name="gauge-thin";
export const id="dl_7a99ca8fcf4d49d29d4d";
export const url=new URL("../icons/gauge-thin.svg?v=ddd44c9714742cdc88099e2c8899d4b92e22d1daab63e7dd88ea0fd7496c969b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
