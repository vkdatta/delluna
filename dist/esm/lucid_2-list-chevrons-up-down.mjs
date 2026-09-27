export const name="lucid_2-list-chevrons-up-down";
export const id="dl_2c48af1c869f4644968f";
export const url=new URL("../icons/lucid_2-list-chevrons-up-down.svg?v=37caa672fbb41dc3651527a5692947cd3b55192a89aa62c8e2defbbd2b989d45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
