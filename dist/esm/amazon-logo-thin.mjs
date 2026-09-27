export const name="amazon-logo-thin";
export const id="dl_b80442ffaa56423c986e";
export const url=new URL("../icons/amazon-logo-thin.svg?v=aef819f71baa9133701bc599565b3b0df440c3ce8a7be00e2de72c33b6921631",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
