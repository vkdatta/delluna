export const name="charging-station-light";
export const id="dl_e4730cb1f57747a9a668";
export const url=new URL("../icons/charging-station-light.svg?v=4cefb1b0a4b691f067ffc4e636d7c7893d910a4b0ba33e8faab8f0e215f0691f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
