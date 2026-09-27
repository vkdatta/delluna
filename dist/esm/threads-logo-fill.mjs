export const name="threads-logo-fill";
export const id="dl_a70e333136c85909d3a2";
export const url=new URL("../icons/threads-logo-fill.svg?v=d850243c98966e046cf76f1d045d67d7887cc9d92475c553478080343c61aa5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
