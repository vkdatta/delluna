export const name="garage_home";
export const id="dl_252647f647fc559ac6f4";
export const url=new URL("../icons/garage_home.svg?v=51f716e46cc02f80d4f807ca64b370ca4d9030a40f050080342d2c1717415bac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
