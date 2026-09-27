export const name="file-rs-fill";
export const id="dl_c44c69ad1af84af4ace6";
export const url=new URL("../icons/file-rs-fill.svg?v=42e800afbc4400736103f209a547b6f4c37dcb7f6dac44b3f037146e6d665a7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
