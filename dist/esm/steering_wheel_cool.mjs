export const name="steering_wheel_cool";
export const id="dl_76cd6246259d4fb89124";
export const url=new URL("../icons/steering_wheel_cool.svg?v=1c05272b83577314d6c5928c7f94f4c4c7a50f851761c07646c1e2ef7eb1aa31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
