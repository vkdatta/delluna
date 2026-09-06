export const name="lucid_1-boxes";
export const id="dl_d5aaad6734fc40549dae";
export const url=new URL("../icons/lucid_1-boxes.svg?v=89c344336d092e58bddf3789cffd7839b3457fd459147e6a57d3dfaf095e84fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
