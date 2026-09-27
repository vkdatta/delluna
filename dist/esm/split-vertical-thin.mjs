export const name="split-vertical-thin";
export const id="dl_4ea6e95df326e9e97718";
export const url=new URL("../icons/split-vertical-thin.svg?v=683fb235a7a4286fe349c5ee46710168b94438a42b0cd3cbbe5279bed754bb84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
