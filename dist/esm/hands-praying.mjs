export const name="hands-praying";
export const id="dl_4f0349bf116f49ca98ed";
export const url=new URL("../icons/hands-praying.svg?v=9dbafa6975384980cf43f48f2799764bfbf84814236ae92c296d94b4ef6e7497",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
