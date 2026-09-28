export const name="user-gear-bold";
export const id="dl_db3a02d284f093da34c2";
export const url=new URL("../icons/user-gear-bold.svg?v=42ba1b0d52f232793fdb43290858c6cfb86f53b44440024b85988229cec6565c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
