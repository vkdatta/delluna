export const name="airplane-takeoff";
export const id="dl_8045f0082de3462bb066";
export const url=new URL("../icons/airplane-takeoff.svg?v=e671734e1b78c81b3b8eb54fc8b3183236e4a66bb8b80541b5213efba4c846a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
