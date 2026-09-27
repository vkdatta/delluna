export const name="arrow-down-left-bold";
export const id="dl_76ba3e8b77c046e9abe7";
export const url=new URL("../icons/arrow-down-left-bold.svg?v=36a236873e32f6744d79df1358307cef82cafa647c18f028c4aa2d6cc0347598",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
