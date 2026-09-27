export const name="tools_power_drill";
export const id="dl_77f361770b4978cfdaf7";
export const url=new URL("../icons/tools_power_drill.svg?v=2b0e38443097d7b8f72913fb1ae064ea61f5298fc89a26c42b80b4a4b324d0fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
