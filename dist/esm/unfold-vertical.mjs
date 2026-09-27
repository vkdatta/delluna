export const name="unfold-vertical";
export const id="dl_78d888718edf4d18810f";
export const url=new URL("../icons/unfold-vertical.svg?v=710ff1f171e51606f062c1c15a4b65e858465f817c2b53b43d9b93f1ff7fa6b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
