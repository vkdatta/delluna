export const name="tty";
export const id="dl_01fbe43352fd7dab54c5";
export const url=new URL("../icons/tty.svg?v=8645ff3ec49075c22b9c15fe3c5187907a4738e61b6b1d1b2ab52deaaea554a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
