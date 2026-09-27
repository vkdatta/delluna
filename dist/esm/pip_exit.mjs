export const name="pip_exit";
export const id="dl_9234fe9a84dca733d5a3";
export const url=new URL("../icons/pip_exit.svg?v=095ea56a8f5541092a3220cc8d0dea1f85c5b4f36b5bcfb900e05c09177698dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
