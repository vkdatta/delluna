export const name="tab_duplicate";
export const id="dl_7917b9507db306b9def4";
export const url=new URL("../icons/tab_duplicate.svg?v=2fbb0aebf107cc38fc748e959ee0818dadc3326dbbbca91f70ea78eb24802b09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
