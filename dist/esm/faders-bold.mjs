export const name="faders-bold";
export const id="dl_c7df18508a5a473dbf7b";
export const url=new URL("../icons/faders-bold.svg?v=a9475615611c94225b7e94ceb2e197e9aa88f190f27e60c1546aa3756ea13ffd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
