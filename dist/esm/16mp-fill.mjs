export const name="16mp-fill";
export const id="dl_b29551e040858dd7103a";
export const url=new URL("../icons/16mp-fill.svg?v=0e27ee3163b570ba404171e11b1baa7418fd286d9fcc4e8cb08ec2a37e7299c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
