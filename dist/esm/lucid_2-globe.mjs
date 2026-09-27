export const name="lucid_2-globe";
export const id="dl_82e1157dbb0e4efe929a";
export const url=new URL("../icons/lucid_2-globe.svg?v=72b4b6543d699a04671e616bf1633f087b4cecf95545cda864368396803ef543",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
