export const name="train-thin";
export const id="dl_bd98b4c4ebfaacab9f96";
export const url=new URL("../icons/train-thin.svg?v=ec030658c7e2658f41ef27f5f429c8499beb06e88a1e6ae10e123885039c7d50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
