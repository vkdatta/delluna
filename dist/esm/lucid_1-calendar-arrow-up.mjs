export const name="lucid_1-calendar-arrow-up";
export const id="dl_f93406c9db864f30ae18";
export const url=new URL("../icons/lucid_1-calendar-arrow-up.svg?v=4758947870e7dfc2a9308081bbe0103628c186ee6b84e1520c9c73bc783eef71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
