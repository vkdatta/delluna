export const name="outgoing_mail";
export const id="dl_4723ae5a8a834c778611";
export const url=new URL("../icons/O/outgoing_mail.svg?v=982d1bb12cba2bb768b947389c86fdcf827cc527ebb73084948619ede6e9a1c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
