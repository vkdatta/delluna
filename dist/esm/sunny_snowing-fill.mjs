export const name="sunny_snowing-fill";
export const id="dl_fef867adc3c6cbdfc4c1";
export const url=new URL("../icons/sunny_snowing-fill.svg?v=5a5a94d08df03d863e48439e098eb4347d9a95c4fbe74fdc7c8c3699446821d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
