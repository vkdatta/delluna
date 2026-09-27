export const name="escalator-down-thin";
export const id="dl_b7c7f912f26540f58558";
export const url=new URL("../icons/escalator-down-thin.svg?v=d3c6b2a924f50acf8996b5d8dbf8ac1c6acd51486668b89be9c75bcb02952553",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
