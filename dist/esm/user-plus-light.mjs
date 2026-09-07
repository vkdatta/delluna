export const name="user-plus-light";
export const id="dl_bfc98a92f01b4770a13e";
export const url=new URL("../icons/U/user-plus-light.svg?v=8abc9fa5782caa412b960ab09a50ad8ba8f3842369f22fdd4a54886a322e8e2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
