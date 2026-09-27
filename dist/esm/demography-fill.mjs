export const name="demography-fill";
export const id="dl_da4b4b8249cf42f291bb";
export const url=new URL("../icons/demography-fill.svg?v=b0f02ad7f9108bcbe50f1fe9029571ddb48a1afcbab5906e6097a7fc1d987917",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
