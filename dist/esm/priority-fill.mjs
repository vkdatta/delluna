export const name="priority-fill";
export const id="dl_7dd63bce9db3d13bd017";
export const url=new URL("../icons/priority-fill.svg?v=0a1236f0f8bd45cb1fa71a227596842dea495d16ec21f436ba88caf47f2ac5c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
