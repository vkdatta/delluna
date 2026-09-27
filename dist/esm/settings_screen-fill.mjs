export const name="settings_screen-fill";
export const id="dl_c4eb38f03abca6aafacb";
export const url=new URL("../icons/settings_screen-fill.svg?v=f1a0e65b68263535cb11430ee0b6742612d52622e59d3dd267d6a37154b8fc41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
