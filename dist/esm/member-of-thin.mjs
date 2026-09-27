export const name="member-of-thin";
export const id="dl_8a5a58ba61b944fdb8e4";
export const url=new URL("../icons/member-of-thin.svg?v=6cf198eb6ccd0d7a592af9e845ec8e78949c1a16bd5d016209efe8c9de793a1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
