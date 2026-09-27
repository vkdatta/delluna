export const name="fire_check";
export const id="dl_fb614787aae2ffcd793f";
export const url=new URL("../icons/fire_check.svg?v=e72009cdd38b746d20f0b69c9323aad873cb8154e17c11db4bf818bd6475091f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
