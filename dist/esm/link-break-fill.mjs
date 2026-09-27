export const name="link-break-fill";
export const id="dl_f35cdb4c197f46deb201";
export const url=new URL("../icons/link-break-fill.svg?v=949bf75f36d1b3a99adcdcf555e8f0003cbcc0031d53c76858a9694eccc9b18a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
