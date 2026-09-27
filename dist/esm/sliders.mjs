export const name="sliders";
export const id="dl_b6b5cbe3e4374670a100";
export const url=new URL("../icons/sliders.svg?v=b9dfa8727f4f67bd42159fdbecc162cfe4cf6aec572fac75f07aeb53e460c7bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
