export const name="greater-than-bold";
export const id="dl_86ad73b67a22459baf0c";
export const url=new URL("../icons/greater-than-bold.svg?v=ef7cd77813657cf685afc3664ab4f7eef889b725017620cd28ad085a2ec2e7af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
