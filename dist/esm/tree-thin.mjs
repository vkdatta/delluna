export const name="tree-thin";
export const id="dl_469559c82ed7f6d03c32";
export const url=new URL("../icons/tree-thin.svg?v=541bc9defc918ecf6e025246e2dd04b0149205e23967106d7e72c689d2a56576",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
