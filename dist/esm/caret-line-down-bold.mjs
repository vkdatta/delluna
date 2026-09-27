export const name="caret-line-down-bold";
export const id="dl_c79cfa8ecfdb4d52b736";
export const url=new URL("../icons/caret-line-down-bold.svg?v=916d52e69a12689339d0040f573e1aab48d9230ce2af213d381c816756eda0e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
