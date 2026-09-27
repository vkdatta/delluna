export const name="lucid_2-grip-vertical";
export const id="dl_445c7ebdf017410a8128";
export const url=new URL("../icons/lucid_2-grip-vertical.svg?v=a155fc56bc5770981af4457f6da37371c4c83a75e059c8f97624ab71acc85268",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
