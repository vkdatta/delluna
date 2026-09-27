export const name="lucid_2-list-restart";
export const id="dl_91197a3949e24a99b713";
export const url=new URL("../icons/lucid_2-list-restart.svg?v=93363573f351f0c069740df22cc6ea6df3eb466774fdf2af600defed9a4e4133",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
