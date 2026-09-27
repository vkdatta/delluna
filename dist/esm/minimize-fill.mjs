export const name="minimize-fill";
export const id="dl_1b8dba72bc0a03cd6ac8";
export const url=new URL("../icons/minimize-fill.svg?v=c72fd044c3b99aed1afda69337d6bf34c99d8aa1cb30bb89d3f0b157a2c96a4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
