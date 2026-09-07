export const name="paste";
export const id="dl_445434bff2fc67acf7e7";
export const url=new URL("../icons/paste.svg?v=0d266b0cd81fa266bcc105f466bac18ef047c112d5fab9e3cc40a894007c3d49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
