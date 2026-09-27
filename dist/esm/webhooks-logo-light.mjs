export const name="webhooks-logo-light";
export const id="dl_b00b12de9a9d70be0ef2";
export const url=new URL("../icons/webhooks-logo-light.svg?v=1a66fe9a92e2f913eda6a9f4315473849c1da2eafbdd355080dccc57fc5d91ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
