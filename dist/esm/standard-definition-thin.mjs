export const name="standard-definition-thin";
export const id="dl_46ede45cd85e8979dbc0";
export const url=new URL("../icons/standard-definition-thin.svg?v=48595360a24139a36f4409da7fe66ee81057b57a69b2564376eb92dad9f5c96d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
