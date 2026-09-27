export const name="not-equals-fill";
export const id="dl_ecd2578f601c4e36b0c8";
export const url=new URL("../icons/not-equals-fill.svg?v=febf1b77463a57f2eab5882fd0b98e2487854c9acd0230ecd6b17c9ed33333f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
