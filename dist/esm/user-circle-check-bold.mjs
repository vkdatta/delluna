export const name="user-circle-check-bold";
export const id="dl_5cbcd9c4484c9287fa98";
export const url=new URL("../icons/user-circle-check-bold.svg?v=7bf896493cdac509bc9f7a3581831ed20a5e41799592502141895e69c08d9416",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
