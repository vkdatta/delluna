export const name="stairs";
export const id="dl_98c8f97e45a1444bbc1f";
export const url=new URL("../icons/S/stairs.svg?v=9044c34ea5a5f679395a239f0bac11a930c4af5605b42d400ab25671cd7a055b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
