export const name="lucid_1-biohazard";
export const id="dl_4a02d0212b7a4f4f8921";
export const url=new URL("../icons/lucid_1-biohazard.svg?v=be6aa9858365d02b56e0d7b89bdfc88d238e1a056c56e650bc7b7abf68cbb718",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
