export const name="lucid_3-mouse";
export const id="dl_29756c43294249349af0";
export const url=new URL("../icons/lucid_3-mouse.svg?v=2acb49647ca811927ce324a0bef1a155254b0d092d9540568d3570a5749fc3c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
