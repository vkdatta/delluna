export const name="scoreboard-fill";
export const id="dl_27218f90eb12fb3c7b20";
export const url=new URL("../icons/scoreboard-fill.svg?v=ff2e1a7322150c58043ec2eb7117157c01ff885ab30fe0374365a3d5b0d8359d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
