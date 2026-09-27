export const name="sidebar-simple-fill";
export const id="dl_0222683d67a9560e39a2";
export const url=new URL("../icons/sidebar-simple-fill.svg?v=f4e485f8c296f147fd4cb6ec97311415b60c5849e07826d7aaeae518ec9d9cc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
