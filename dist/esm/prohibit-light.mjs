export const name="prohibit-light";
export const id="dl_62c08d5dcead4e58a465";
export const url=new URL("../icons/prohibit-light.svg?v=3839ae24f12849975f67030d200bc7d3e8019ea55f587f2eab5fbc45a0fdffd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
