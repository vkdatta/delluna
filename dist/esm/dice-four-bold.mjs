export const name="dice-four-bold";
export const id="dl_699e112982bc407ab0d4";
export const url=new URL("../icons/dice-four-bold.svg?v=c29c713d0dae017600daa4e78d8d7a2686bb602f02240b9627740dfbc16222f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
