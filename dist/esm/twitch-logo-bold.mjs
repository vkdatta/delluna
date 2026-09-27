export const name="twitch-logo-bold";
export const id="dl_542ce8244f3f99828af8";
export const url=new URL("../icons/twitch-logo-bold.svg?v=81c477058ba101634279ba6083ee065247d10910014b2f4678f1c134660d821c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
