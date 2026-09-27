export const name="square-split-horizontal-bold";
export const id="dl_772d18493a13e532ba5e";
export const url=new URL("../icons/square-split-horizontal-bold.svg?v=ee304cc82e9e170f203abd2bf4c39d49a2fd03c76a60c1315a0ec6e8eab456de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
