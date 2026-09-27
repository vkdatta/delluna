export const name="users-three-bold";
export const id="dl_b94d0228ab1ba4b675b4";
export const url=new URL("../icons/users-three-bold.svg?v=78ff139448a6f387e535fab6ce338c48a42c48d826c6845c718d2e95f81ef59e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
