export const name="lego-smiley";
export const id="dl_fdf9dc22fb39495480a7";
export const url=new URL("../icons/lego-smiley.svg?v=f1af7e8a37636efcedf471e0d5f54b9ca39a3e67448a541144704e8d1be94061",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
