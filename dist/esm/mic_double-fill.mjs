export const name="mic_double-fill";
export const id="dl_fc2dbc1c802947299605";
export const url=new URL("../icons/M/mic_double-fill.svg?v=692428abceb1a619fd2bc544de0a3cd250b55e40f514947ac4913c3cebc43573",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
