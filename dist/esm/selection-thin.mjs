export const name="selection-thin";
export const id="dl_38db33426184a910c964";
export const url=new URL("../icons/selection-thin.svg?v=6202ec81734b3aeb1517a7a072cfcec35175bda677298eca0ffaa62547e5a82d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
