export const name="lucid_3-message-square-check";
export const id="dl_4f5af5935ab64a5cb007";
export const url=new URL("../icons/lucid_3-message-square-check.svg?v=fdecaf467fcdf62064652b58c5f36bfa82402f92b0999a913f305e941edf1bf6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
