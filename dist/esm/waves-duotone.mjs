export const name="waves-duotone";
export const id="dl_ba335551d56042e395d7";
export const url=new URL("../icons/W/waves-duotone.svg?v=fab5cb9ab0a07b4eb0ad8e0c0bbfb981d9c4c34e9e66bb4d1bb4208de43a55f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
