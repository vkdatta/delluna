export const name="arrow_circle_right";
export const id="dl_c1800c85c10cbfcff21f";
export const url=new URL("../icons/arrow_circle_right.svg?v=f1eefbd032a1dfe4b95cf00e0e9c26f51470d4190df437ecaccbfadbcda5c478",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
