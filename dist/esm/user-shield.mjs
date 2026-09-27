export const name="user-shield";
export const id="dl_5906a117a3074f4fa391";
export const url=new URL("../icons/user-shield.svg?v=259d68155a12996949861599e4e0e908a956bc5fbeed33de863c4f15ce56f11d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
