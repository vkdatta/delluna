export const name="propane_tank";
export const id="dl_f9c80c9e562ff7713341";
export const url=new URL("../icons/propane_tank.svg?v=c89f4190cb380e2266fe85bd781c5a2888deb19d7e4ad12952348b17b2ee1944",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
