export const name="psychology";
export const id="dl_2d4f3ccd554534ba1448";
export const url=new URL("../icons/psychology.svg?v=9431062943c520a3918ae073c9e93fce23f76afa79f731432ce024a095a64aa1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
