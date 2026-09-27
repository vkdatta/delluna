export const name="desktop_access_disabled-fill";
export const id="dl_8b6c65b1c52a5a148bab";
export const url=new URL("../icons/desktop_access_disabled-fill.svg?v=f1dbdb5e96cf87bde4e20584db179aec53dcdb54f59e2a01d07e250fd2d68979",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
