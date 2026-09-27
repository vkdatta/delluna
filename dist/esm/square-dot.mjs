export const name="square-dot";
export const id="dl_7860a82d76de4c30963a";
export const url=new URL("../icons/square-dot.svg?v=7bd9b2042a39cf496fb8970575e87f8163934a780a06acc8c94d6b8909956d78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
