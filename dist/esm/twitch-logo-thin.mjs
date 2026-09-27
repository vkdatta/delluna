export const name="twitch-logo-thin";
export const id="dl_157bbc4e1f928d812349";
export const url=new URL("../icons/twitch-logo-thin.svg?v=4b416eececac2412e9cf1b727f1f7745669b9b4aa9b00f6d9310a62f7f527e56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
