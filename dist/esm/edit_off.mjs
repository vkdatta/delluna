export const name="edit_off";
export const id="dl_b5d1ad1c809e2b9ed042";
export const url=new URL("../icons/edit_off.svg?v=845638f2a51d982784f221f34757d4dbd22bc4a8d611d83f6ae6a5d685d3f259",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
