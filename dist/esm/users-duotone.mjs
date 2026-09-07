export const name="users-duotone";
export const id="dl_fe3098aa7a52442cb965";
export const url=new URL("../icons/U/users-duotone.svg?v=bce473e028982d8383e97e4f4c9cde592564be57cc16c7a303fe72cfdced34ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
