export const name="hourglass-high-thin";
export const id="dl_21b0fde5d3064d06b4d8";
export const url=new URL("../icons/hourglass-high-thin.svg?v=47599323d9cb1420f8f2234d7b6c987e7ff40a6c96789d53052d76f2841107e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
