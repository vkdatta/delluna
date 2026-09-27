export const name="lucid_2-diamond-percent";
export const id="dl_56125e3c902144eba676";
export const url=new URL("../icons/lucid_2-diamond-percent.svg?v=e122b303cf0df1d7772ac85c0c4de5b98ad3f3b33b2c5377a3c903973909ebc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
