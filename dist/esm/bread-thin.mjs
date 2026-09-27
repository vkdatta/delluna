export const name="bread-thin";
export const id="dl_f79c5b68902c45869403";
export const url=new URL("../icons/bread-thin.svg?v=a46e45f898d7b5ae2ab4f04939d9d7aa528747f9316eaad093c6fae5030e87d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
