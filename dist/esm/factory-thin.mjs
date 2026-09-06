export const name="factory-thin";
export const id="dl_9226995c1ed84ba2af03";
export const url=new URL("../icons/factory-thin.svg?v=5411b4f1d1145bd746bd687a5f185717b55b1728d20b4fc99a99623a18d6a0f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
