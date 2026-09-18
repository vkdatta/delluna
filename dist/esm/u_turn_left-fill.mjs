export const name="u_turn_left-fill";
export const id="dl_00930ec1e5f64d25bb20";
export const url=new URL("../icons/U/u_turn_left-fill.svg?v=621424e6858dc823239efd863992e9451acb7c1469d517b041c26f60b22424a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
