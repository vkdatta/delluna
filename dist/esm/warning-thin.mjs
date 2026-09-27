export const name="warning-thin";
export const id="dl_c1b866eac95bf032f5d3";
export const url=new URL("../icons/warning-thin.svg?v=b355767d569b2e69eef90686ef3a2af66aee5b436efc8e624a0fb530e4c2a539",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
