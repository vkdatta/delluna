export const name="moped-front-bold";
export const id="dl_79745c8da8af45f6895f";
export const url=new URL("../icons/moped-front-bold.svg?v=7dfacf61fcf06e1f19b570510d76da74f5c8858732b8a61616a6ef29c8afd949",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
