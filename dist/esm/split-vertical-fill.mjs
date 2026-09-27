export const name="split-vertical-fill";
export const id="dl_98431f0ba686987ed6c9";
export const url=new URL("../icons/split-vertical-fill.svg?v=148876f4bc794f7322b9c8e30ed0244a57c54514ac5f37a728572cd4478cd414",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
