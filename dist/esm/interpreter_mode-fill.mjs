export const name="interpreter_mode-fill";
export const id="dl_090c13aa1ce4c4275c8b";
export const url=new URL("../icons/interpreter_mode-fill.svg?v=1ebb2b68c5c957544db655019bb9925b89ed11fa08e8a6f571da20ab5386fa26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
