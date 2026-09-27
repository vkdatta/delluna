export const name="clock-counter-clockwise-thin";
export const id="dl_52987e9bf6dd4963a0d4";
export const url=new URL("../icons/clock-counter-clockwise-thin.svg?v=527f34bfcc2eda3b90588eeb94e724fa400ee42dfe70eae1376193d355645ae9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
