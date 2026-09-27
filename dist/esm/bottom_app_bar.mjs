export const name="bottom_app_bar";
export const id="dl_fa9f873b10f97503c482";
export const url=new URL("../icons/bottom_app_bar.svg?v=c7a4e93a9f39d6ecdf0bafa77efe51a4ac2841c81475d9b30690c0e37962b5eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
