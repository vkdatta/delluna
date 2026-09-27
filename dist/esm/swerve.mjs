export const name="swerve";
export const id="dl_609927229d55448ea6ab";
export const url=new URL("../icons/swerve.svg?v=63618821b8731ccf4651fc1930770f84054c000d7b82725c9c5fd053a0a673fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
