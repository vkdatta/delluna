export const name="split-vertical-bold";
export const id="dl_1ab7880bf746ea43b6a3";
export const url=new URL("../icons/split-vertical-bold.svg?v=e56df7d4e9d8caa6086abf1203f0fb9ee68aa3a6c03f166009269a58c4105917",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
