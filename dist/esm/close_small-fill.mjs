export const name="close_small-fill";
export const id="dl_b18ad73efa70a92b73e2";
export const url=new URL("../icons/close_small-fill.svg?v=df9546f5a765f71e72c6617237abf44fc50d651cfe7c87b54bcbfd5b91edabe5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
