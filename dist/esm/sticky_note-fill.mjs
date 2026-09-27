export const name="sticky_note-fill";
export const id="dl_c94a84b20a8b98ce37a7";
export const url=new URL("../icons/sticky_note-fill.svg?v=e3f595c29618b97e9c7ca8f28d900cccf4825222ea9ece9d34d1fc71a77bff11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
