export const name="line-vertical";
export const id="dl_b5d566a7d88e49adb10c";
export const url=new URL("../icons/line-vertical.svg?v=226c2bed47197aa54e278b9c6390bab4840f2b1d747800e66865323fa0a9ed7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
