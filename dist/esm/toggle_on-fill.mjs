export const name="toggle_on-fill";
export const id="dl_a5fdeab8d48266a718e0";
export const url=new URL("../icons/toggle_on-fill.svg?v=1a419c8ea6ab1c8822bf65c2341b6c4e55a1bc5c6c53dca020590fd65d0c41b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
