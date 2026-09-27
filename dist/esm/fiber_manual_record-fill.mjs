export const name="fiber_manual_record-fill";
export const id="dl_c79d45c29f5f35accf7f";
export const url=new URL("../icons/fiber_manual_record-fill.svg?v=11a3879901df8671f7165323a4bc7253e2c63d52b8330382694a6ec864c5bc53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
