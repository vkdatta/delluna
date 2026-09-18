export const name="nest_farsight_seasonal";
export const id="dl_f9133ac67aae4c269b66";
export const url=new URL("../icons/nest_farsight_seasonal.svg?v=4b42b7d2299e9d7614adc8b583eb954128183510f9cdff4ba07488198732709a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
