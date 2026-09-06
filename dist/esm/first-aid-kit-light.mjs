export const name="first-aid-kit-light";
export const id="dl_c664b610e9ef48e698c3";
export const url=new URL("../icons/first-aid-kit-light.svg?v=d4502b58a5e10bd423e32505048c6d9f1985a15123d413d7a651fd5c3472e531",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
