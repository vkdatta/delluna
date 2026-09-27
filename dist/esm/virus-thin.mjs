export const name="virus-thin";
export const id="dl_3558ec33efc5f1f9ca3d";
export const url=new URL("../icons/virus-thin.svg?v=38da269fe9dcf0b0bdbc19458776df7a0d055573b4e4f1070160b237e902d5fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
